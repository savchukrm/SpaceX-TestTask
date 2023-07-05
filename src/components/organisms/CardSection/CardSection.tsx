import React from 'react';
import styled from 'styled-components';

import Card from '../../molecules/Card/Card';
import Pagination from '../../molecules/Pagination/Pagination';
import { IconArrow } from '../../atoms/Icon/Icon';

// @ts-ignore
import photo1 from '../../../assets/images/card1.svg';
// @ts-ignore
import photo2 from '../../../assets/images/card2.svg';
// @ts-ignore
import photo3 from '../../../assets/images/card3.svg';
// @ts-ignore
import arrowLeft from '../../../assets/images/arrowleft.svg';
// @ts-ignore
import arrowRight from '../../../assets/images/arrowright.svg';
// @ts-ignore
import heartIcon from '../../../assets/images/heart.svg';

const CardsSection = () => {
  return (
    <SectionContainer>
      <CardSectionHeader>
        <Title>popular tours</Title>

        <ButtonsContainer>
          <IconArrow imgUrl={arrowLeft} act={undefined} />
          <IconArrow imgUrl={arrowRight} act={undefined} />
        </ButtonsContainer>
      </CardSectionHeader>

      <CardsContainer>
        <Card
          imageSrc={photo1}
          title="Extraordinary tour"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={heartIcon}
        />
        <Card
          imageSrc={photo2}
          title="Extraordinary tour"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={heartIcon}
        />
        <Card
          imageSrc={photo3}
          title="Extraordinary tour"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={heartIcon}
        />
      </CardsContainer>

      <Pagination />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 1281px;
  margin: 0 auto;
`;

const CardSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #1e1e1e;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  margin: 40px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export default CardsSection;
