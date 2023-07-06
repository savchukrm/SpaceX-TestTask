import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// @ts-ignore
import blackHeart from '../../../assets/images/heart.svg';
// @ts-ignore
import whiteHeart from '../../../assets/images/whiteHeart.svg';

interface IconProps {
  imgUrl: string;
  handleClick: () => void;
}

interface IconArrowProps {
  imgUrl: string;
}

export const Icon: React.FC<IconProps> = ({ handleClick, imgUrl }) => {
  return (
    <IconContainer onClick={handleClick}>
      <img src={imgUrl} alt="icon" />
    </IconContainer>
  );
};

export const IconFav: React.FC = () => {
  const location = useLocation();
  const isFavoritePage = location.pathname === '/fav';

  return (
    <IconFavContainer isFavoritePage={isFavoritePage}>
      <img alt="heart" src={isFavoritePage ? whiteHeart : blackHeart} />
    </IconFavContainer>
  );
};

export const IconArrow: React.FC<IconArrowProps> = ({ imgUrl }) => {
  return (
    <IconArrowContainer>
      <img src={imgUrl} alt="arrow" />
    </IconArrowContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #ececec;
  cursor: pointer;

  &:hover {
    background: #82bbcd;
  }
`;

const IconFavContainer = styled.div<{ isFavoritePage: boolean }>`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: ${(props) => (props.isFavoritePage ? '#dd377d' : '#ececec')};
  cursor: pointer;
`;

const IconArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ececec;
  height: 44px;
  width: 44px;
  cursor: pointer;
`;
