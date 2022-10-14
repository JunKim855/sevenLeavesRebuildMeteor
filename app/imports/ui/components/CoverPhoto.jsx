import React from 'react';
import { Row, Card, Image, Button } from 'react-bootstrap';

const CoverPhoto = () => (
  <Row className="mb-4">
    <Card className="border-white">
      <Image src="./images/thai_green_tea.jpeg" />
      <div className="main-caption text-white">
        <p className="display-3">ชาเขียว</p>
        <p>From Thailand to your hand</p>
        <p>A sweet and creamy green tea goodness</p>
        <Button className="btn btn-danger">VIEW MENU</Button>
      </div>
    </Card>
  </Row>
);

export default CoverPhoto;
