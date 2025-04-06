import fs from "fs";
import sharp from "sharp";

export function getImagePreview(imagePath: string): Promise<string | null> {
  return new Promise((resolve) => {
    fs.readFile(imagePath, (error, result) => {
      if (error) {
        console.error(error);
        resolve(null);
        return;
      }

      sharp(result)
        .resize(150, 150, { fit: "contain" })
        .toBuffer()
        .then((data) => {
          resolve(`data:image/png;base64,${data.toString("base64")}`);
        })
        .catch((error) => {
          console.error(error);
          resolve(null);
        });
    });
  });
}
