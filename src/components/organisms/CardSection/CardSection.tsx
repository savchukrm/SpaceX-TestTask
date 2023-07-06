import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useQuery, QueryResult } from '@apollo/client';
import { useSetRecoilState } from 'recoil';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GET_ROCKETS } from '../../../utils/queries';
import { favoriteCardsState } from '../../../recoil/atom';

import Card from '../../molecules/Card/Card';
import { CardData } from '../../../utils/types';
import { IconArrow } from '../../atoms/Icon/Icon';

import photo1 from '../../../assets/images/card1.png';
import photo2 from '../../../assets/images/card2.png';
import photo3 from '../../../assets/images/card3.png';
import arrowLeft from '../../../assets/images/Arrow-left.png';
import arrowRight from '../../../assets/images/Arrow-right.png';

interface Rocket {
  id: string;
  description: string;
  name: string;
}

interface RocketsData {
  rockets: Rocket[];
}

const CardsSection: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const setFavoriteCards = useSetRecoilState(favoriteCardsState);

  const { loading, error, data }: QueryResult<RocketsData> =
    useQuery<RocketsData>(GET_ROCKETS);

  useEffect(() => {
    if (data) {
      setRockets(data.rockets);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const getImageForIndex = (index: number): string => {
    const designImages = [photo1, photo2, photo3];
    const firstDesignImageIndex = index % 3;
    const repeatingImageIndex = Math.floor(index / 3) % 3;

    if (index < 3) {
      return designImages[firstDesignImageIndex];
    } else {
      return designImages[repeatingImageIndex];
    }
  };

  const handleAddToFavorites = (rocket: Rocket) => {
    const newFavoriteCard: CardData = {
      id: rocket.id,
      imageSrc: getImageForIndex(rockets.length),
      title: rocket.name,
      subtitle: rocket.description,
    };
    setFavoriteCards((prevCards) => [...prevCards, newFavoriteCard]);
  };

  return (
    <div id="cards-section">
      <SectionContainer>
        <CardSectionHeader>
          <Title>popular tours</Title>

          <ButtonsContainer>
            <IconArrow imgUrl={arrowLeft} />
            <IconArrow imgUrl={arrowRight} />
          </ButtonsContainer>
        </CardSectionHeader>

        <AliceCarousel
          items={rockets.map((rocket: Rocket, index: number) => (
            <Card
              key={rocket.id}
              imageSrc={getImageForIndex(index)}
              title={rocket.name}
              subtitle={rocket.description}
              onAddToFavorites={() => handleAddToFavorites(rocket)}
              isFavorite={false}
            />
          ))}
          responsive={{
            0: { items: 1 },
            768: { items: 3 },
          }}
          controlsStrategy="responsive"
          disableButtonsControls
          infinite
          autoPlay
          animationDuration={2000}
        />
      </SectionContainer>
    </div>
  );
};

const SectionContainer = styled.div`
  width: 1281px;
  margin: 100px auto;
`;

const CardSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #1e1e1e;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export default CardsSection;
