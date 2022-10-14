import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const News = () => (
  <>
    <Row className="bottom-section align-items-center mb-3">
      <Col className="m-3">
        <img width="100%" src="./images/artisan.jpeg" alt="artisan" />
      </Col>
      <Col className="text-muted m-3">
        <p className="display-6 text-dark">Artisan Is Now Open in Fountain Valley</p>
        <p>7 Leaves Cafe and Crema Bakery are proud to partner together to bring you Artisan. This fresh concept brings a mixture of exciting new brunch items with all of your favorite 7 Leaves Drinks.</p>
        <p>Celebrate with us on July 24th for our Grand Opening! Or stop by our Drive Thru lane for a drink and snack.</p>
        <p>For customers who are in a hurry, we also provide a quick and convenient mobile pickup experience. Simply download the mobile app, and start collecting leaves today.</p>
      </Col>
    </Row>

    <Row className="bottom-section align-items-center mb-3">
      <Col className="text-muted m-3">
        <p className="display-6 text-dark">Launching the 7 Leaves Cafe Mobile App</p>
        <p>7 Leaves Cafe is proud to announce the launch of our new Mobile App. Start earning Rewards (Leaves) with easy ordering and delivery. It’s a convenient way to order ahead and pay right on your phone. Earn Leaves and get free drinks
          and items for every dollar you spend. Get exclusive offers and much more!
        </p>
        <p>Download today on Apple App Store and Google Play Store!</p>
        <br />
        <Button className="btn btn-danger">READ MORE</Button>
      </Col>
      <Col className="m-3">
        <img width="100%" src="./images/mobile_app.png" alt="mobile app" />
      </Col>
    </Row>

    <Row className="bottom-section align-items-center mb-5">
      <Col className="m-3">
        <img width="100%" src="./images/responsibility.jpeg" alt="responsibility" />
      </Col>
      <Col className="text-muted m-3">
        <p className="display-6 text-dark">Our Commitment & Responsibility</p>
        <p>At 7 Leaves, we have a rooted belief seeing the world “through our customer’s eyes.” This powerful idea helps us stay focused on what’s most important: living up to the trust you place in us every day.</p>
        <p>As cities here and around the world tackle the increasing spread of the coronavirus, we&apos;d like to share our commitment of keeping our families, team members and communities safe and healthy, guided by proper care.</p>
        <p>We believe it&apos;s our responsibility not only to focus on the well-being of our team and our communities, we also want to support our local health officials and government leaders as they work to respond to the disease.</p>
        <br />
        <Button className="btn btn-danger">READ MORE</Button>
      </Col>
    </Row>
  </>
);

export default News;
