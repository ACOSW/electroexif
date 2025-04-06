import { useState } from "react";
import { ImageObject } from "./types/ImageObject";

export const App = () => {
  const [images, setImages] = useState<ImageObject[]>([]);

  const handleButtonClick = async () => {
    // @ts-expect-error: TODO add types for electronAPI
    const data = await window.electronAPI.openFile();
    setImages(data);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleButtonClick}>open file</button>
      {images.map((image) => (
        <div key={image.imagePath}>
          <img src={image.preview} />
          <pre>{JSON.stringify(image.exif)}</pre>
        </div>
      ))}
    </div>
  );
};
