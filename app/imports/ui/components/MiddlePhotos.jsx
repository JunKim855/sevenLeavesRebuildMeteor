import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

const MiddlePhotos = () => (
  <Row>
    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src="./images/coffee_tea.jpeg" />
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Coffee Tea<br />Goodness</p>
        </div>
      </Card>
    </Col>

    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src="./images/macarons.jpeg" />
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Our Macarons</p>
        </div>
      </Card>
    </Col>

    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src="./images/7leaves.jpeg" />
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Find a 7 Leaves</p>
        </div>
      </Card>
    </Col>
  </Row>
);

export default MiddlePhotos;
