import React from 'react';
import styled from 'styled-components';

import Card from '../../molecules/Card/Card';

import { ClearAllButton } from '../../atoms/Button/Button';

// @ts-ignore
import photo1 from '../../../assets/images/card1.svg';
// @ts-ignore
import photo2 from '../../../assets/images/card2.svg';
// @ts-ignore
import photo3 from '../../../assets/images/card3.svg';
// @ts-ignore
import heartIcon from '../../../assets/images/heart.svg';

const FavCards = () => {
  return (
    <SectionContainer>
      <ButtonContainer>
        <ClearAllButton />
      </ButtonContainer>

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
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 1281px;
  margin: 100px auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  margin: 40px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default FavCards;
