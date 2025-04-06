import { GENERAL_EXIF_TAGS, METADATA_EXIF_TAGS } from "../constants";
import { exifTool } from "./exifTool";

export function readImageExif(pathToImage: string) {
  return exifTool
    .read(pathToImage)
    .then((data) => {
      if (!data) {
        return null;
      }

      const result: Partial<
        Record<
          METADATA_EXIF_TAGS | GENERAL_EXIF_TAGS,
          string | number | undefined
        >
      > = {};

      Object.values(METADATA_EXIF_TAGS).forEach((tagKey) => {
        const value = data[tagKey];
        result[tagKey] = value;
      }, {});

      Object.values(GENERAL_EXIF_TAGS).forEach((tagKey) => {
        const value = data[tagKey];
        result[tagKey] = value;
      }, {});

      return result;
    })
    .catch((error) => {
      console.error("Unable to read EXIF for file", pathToImage, error);
      return null;
    });
}
