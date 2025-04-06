import { useState } from "react";
import { ImageObject } from "./types/ImageObject";
import {
  Button,
  Card,
  CardBody,
  ChakraProvider,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

export const App = () => {
  const [images, setImages] = useState<ImageObject[]>([]);

  const handleButtonClick = async () => {
    // @ts-expect-error: TODO add types for electronAPI
    const data = await window.electronAPI.openFile();
    setImages(data);
  };

  return (
    <ChakraProvider>
      <div>
        <h1>Hello world</h1>
        <Button onClick={handleButtonClick}>Open file</Button>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {images.map((image) => (
            <GridItem key={image.imagePath} w="100%">
              <Card>
                <Image src={image.preview || ''} />
                <CardBody>
                  <Text fontSize="md">
                    {image.exif.FileName || image.imagePath}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </ChakraProvider>
  );
};
