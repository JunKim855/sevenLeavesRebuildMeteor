import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Instagram, Twitter} from 'react-bootstrap-icons';

const Footer = () => (
  <Container className="pb-5">
    <hr className="text-muted" />
    <hr className="text-muted" />
    <span>7 Leaves Cafe, All Rights Reserved. Coffee Tea Goodness | <span className="text-danger">Home</span> | <span className="text-danger">Accessibility Statement</span> | <span className="text-danger">Privacy Policy</span></span><br />
    <span>© 2011-2022.</span>
    <span id="social-media">
      <span className="m-3">Connect with us:</span>
      <Facebook />&nbsp;&nbsp;
      <Instagram />&nbsp;&nbsp;
      <Twitter />&nbsp;&nbsp;
    </span>
  </Container>
);

export default Footer;
