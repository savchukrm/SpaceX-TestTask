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
import deleteIcon from '../../../assets/images/delete.svg';

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
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={deleteIcon}
        />
        <Card
          imageSrc={photo2}
          title="Extraordinary tour"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={deleteIcon}
        />
        <Card
          imageSrc={photo3}
          title="Extraordinary tour"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit"
          icon={deleteIcon}
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
