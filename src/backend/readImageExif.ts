import { ExifTool } from "exiftool-vendored";

const exiftool = new ExifTool({ taskTimeoutMillis: 5000 });

export function readImageExif(pathToImage: string) {
  return exiftool
    .read(pathToImage)
    .catch((error) => {
      console.error(error);
      return null;
    })
    // .then((data) => JSON.stringify(data))
    .finally(() => exiftool.end());
}
