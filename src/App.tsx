import { useState } from "react";

export const App = () => {
  const [images, setImages] = useState([]);

  const handleButtonClick = async () => {
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
        </div>
      ))}
    </div>
  );
};
