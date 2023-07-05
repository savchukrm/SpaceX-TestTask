import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ExploreTourButton } from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

// @ts-ignore
import back1 from '../../../assets/images/back1.svg';
// @ts-ignore
import back2 from '../../../assets/images/back2.svg';
// @ts-ignore
import back3 from '../../../assets/images/back3.svg';

const Banner = () => {
  const photos = [back1, back2, back3];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <BannerContainer
      style={{ backgroundImage: `url(${photos[currentPhotoIndex]})` }}
    >
      <ContentContainer>
        <Title />
        <ExploreTourButton text="Explore Tours" />
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
