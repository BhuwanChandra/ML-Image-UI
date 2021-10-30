import React, { useState, useEffect } from "react";
import { Container, Image, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  786: { items: 3 },
  1024: { items: 4 },
};

const images = [Image1, Image2, Image3, Image1, Image2, Image3, Image1];

function ModelPage() {
  const { type } = useParams();

  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (file) {
      // TODO: upload image to backend and get result
      setTimeout(() => {
        console.log(file);
        if(file.selectedName) {
          setImgUrl(file.selectedName);
        } else if(file.name) setImgUrl(URL.createObjectURL(file)); // result from backend
      }, 3000);
    }
  }, [file]);

  const onImgSelect = (idx) => {
    setFile({ selectedName: images[idx]});
  };
  console.log(type);

  const slideNext = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const slidePrev = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  const changeImage = () => {
    setFile(null);
    setImgUrl(null);
  }

  return (
    <Container>
      {file ? (
        <div className="text-center">
          <Container id="result-image" className="result-image-container">
            {!imgUrl ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Image className="my-5 result-image" src={imgUrl} fluid />
            )}
          </Container>
          <Button variant="success" onClick={changeImage}>
            Change Image
          </Button>
        </div>
      ) : (
        <Container>
          <FileUpload file={file} setFile={setFile} />
          <p className="text-center">Or select a sample image</p>
          <Container>
            <div className="images-row">
              <AliceCarousel
                activeIndex={imgIndex}
                mouseTracking
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                controlsStrategy="alternate"
                items={images.map((curImg, i) => (
                  <img
                    className="select-img"
                    onClick={() => onImgSelect(i)}
                    src={curImg}
                    onDragStart={(e) => e.preventDefault()}
                    alt="select this"
                  />
                ))}
              />
              <div className="btn-prev" onClick={slidePrev}>
                &lang;
              </div>
              <div className="btn-next" onClick={slideNext}>
                &rang;
              </div>
            </div>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default ModelPage;
