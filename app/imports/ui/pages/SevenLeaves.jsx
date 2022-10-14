import React from 'react';

import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import CoverPhoto from '../components/CoverPhoto';
import MiddlePhotos from '../components/MiddlePhotos';
import Mission from '../components/Mission';
import News from '../components/News';
import Footer from '../components/Footer';

const SevenLeaves = () => (
  <Container>
    <NavBar />
    <CoverPhoto />
    <MiddlePhotos />
    <Mission />
    <News />
    <Footer />
  </Container>
);

export default SevenLeaves;
