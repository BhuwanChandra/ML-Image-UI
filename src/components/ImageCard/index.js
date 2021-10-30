import React from "react";
import { Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Image1 from "../../images/image1.jpg";

import './index.css';

function ImageCard({ title }) {
  return (
    <Container>
      <Card.Img variant="top" src={Image1} />
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="my-1">{title}</Card.Title>
          <Link
            to={`/model/${title}`}
            className="mt-3 btn btn-outline-success w-100"
          >
            Try it out
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ImageCard;
