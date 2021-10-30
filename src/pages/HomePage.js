import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from '../components/ImageCard';

function HomePage() {
  return (
    <Container>
      <Row xs={2} md={3} lg={4} className="m-3">
        {
          allServices.map(title => (
            <Col className="my-2">
              <ImageCard title={title} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

const allServices = [
  "Background Remove",
  "Style Transform",
  "Object Segmentation",
  "Object Detection",
  "Black & White to color",
  "Image Upscale",
  "Face Detection",
  "Remove Objects",
  "Change Sky",
]

export default HomePage
