import React from 'react';
import styled from 'styled-components';

import { CardButton } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, icon }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Card Image" />

      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardText>

      <ButtonSection>
        <CardButton text="Buy" />
        <Icon imgUrl={icon} act={undefined} />
      </ButtonSection>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 411px;
  height: 572px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d3eaff;
`;

const CardImage = styled.img`
  height: 296px;
`;

const CardText = styled.div`
  margin: 32px 0 65px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #1e1e1e;
  font-size: 24px;
  font-family: Syne;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #556b84;
  font-size: 24px;
  font-family: Lato;
  font-weight: 300;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default Card;
