import { IPC_EVENTS } from "../constants";
import { dialog, ipcMain } from "electron";
import { getImagesList } from "./getImagesList";
import { readImageExif } from "./readImageExif";
import { getImagePreview } from "./getImagePreview";

const MAX_FILES = 20;

export class FileAPI {
  async handleOpenDirectory() {
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });

    if (result.canceled) {
      return null;
    }

    const directory = result.filePaths[0];
    const imagesList = await getImagesList(directory);
    const imagesData = [];
    const endOfList = Math.min(imagesList.length, MAX_FILES);
    for (let i = 0; i < endOfList; i++) {
      const imagePath = imagesList[i];
      console.info(`Reading ${i}: ${imagePath}`);
      const exif = await readImageExif(imagePath);
      const preview = await getImagePreview(imagePath);
      imagesData.push({
        preview,
        exif,
        imagePath,
      });
    }

    return imagesData;
  }

  init() {
    ipcMain.handle(IPC_EVENTS.OPEN_FILE, this.handleOpenDirectory);
  }
}
