export enum IPC_EVENTS {
  OPEN_FILE = "open_file",
}

export const IMAGE_EXTENSIONS = ["jpeg", "jpg", "png", "gif"];

export enum METADATA_EXIF_TAGS {
  MIME_TYPE = "MIMEType",
  FILE_TYPE = "FileType",
  FILE_NAME = "FileName",
  IMAGE_WIDTH = "ImageWidth",
  IMAGE_HEIGH = "ImageHeight",
  MEGAPIXELS = "Megapixels",
  X_RESOLUTION = "XResolution",
  Y_RESOLUTION = "YResolution",
  COLOR_SPACE_DATA = "ColorSpaceData",
  PROFILE_DESCRIPTION = "ProfileDescription",
}

export enum GENERAL_EXIF_TAGS {
  MAKE = "Make",
  MODEL = "Model",
  LENS_MAKE = "LensMake",
  LENS_MODEL = "LensModel",
  LENS_SERIAL_NUMBER = "LensSerialNumber",
  SOFTWARE = "Software",
  ARTIST = 'Artist',
  USER_COMMENT = 'UserComment',
  COPYRIGHT = 'Copyright',
  IMAGE_DESCRIPTION = 'ImageDescription',
  OWNER_NAME = 'OwnerName'
}
