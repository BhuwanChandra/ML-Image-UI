import React from "react";
import { Container, Card, Button } from 'react-bootstrap';

import './index.css';

function ImageCard({ title }) {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="my-3">{title}</Card.Title>
          <Button className="mt-3" variant="primary">Try it out</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ImageCard;
