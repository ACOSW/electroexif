import { METADATA_EXIF_TAGS, GENERAL_EXIF_TAGS } from "src/constants";

export interface ImageObject {
  imagePath: string;
  exif: Partial<
    Record<METADATA_EXIF_TAGS | GENERAL_EXIF_TAGS, string | number | undefined>
  >;
  preview: string | null;
}
