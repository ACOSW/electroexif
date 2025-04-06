import { glob } from "glob";
import { IMAGE_EXTENSIONS } from "../../src/constants";

export function getImagesList(path: string): Promise<string[]> {
  return new Promise(async (resolve) => {
    const globPattern = `${path}/*.{${IMAGE_EXTENSIONS.join(",")}}`;
    const images = await glob(globPattern);
    resolve(images);
  });
}
