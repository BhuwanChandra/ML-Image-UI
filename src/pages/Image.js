import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import FileUpload from "../components/FileUpload";

import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

function Image() {
  return (
    <Container className="m-3">
      <FileUpload />
      <p className="text-center">Or select a sample image</p>
      <Container>
        <Row className="images-row">
          <Col xs={6} md={4}>
            <img className="select-img" src={Image1} alt="select this" />
          </Col>
          <Col xs={6} md={4}>
            <img className="select-img" src={Image2} alt="select this" />
          </Col>
          <Col xs={6} md={4}>
            <img className="select-img" src={Image3} alt="select this" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Image;
