import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ExploreTourButton } from '../../atoms/Button/Button';
import { MainTitle } from '../../atoms/Title/Title';

import back1 from '../../../assets/images/Property1.png';
import back2 from '../../../assets/images/Property2.png';
import back3 from '../../../assets/images/Property3.png';

const Banner = () => {
  const photos = [back1, back2, back3];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  //   }, 500000);

  //   return () => clearInterval(interval);
  // }, [photos.length]);

  const handleScroll = () => {
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BannerContainer
      style={{ backgroundImage: `url(${photos[currentPhotoIndex]})` }}
    >
      <ContentContainer>
        <MainTitle />
        <ExploreTourButton onClick={handleScroll} />
      </ContentContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export default Banner;
