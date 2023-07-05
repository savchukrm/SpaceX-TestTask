import React from 'react';
import styled from 'styled-components';

interface IconProps {
  act: string | undefined;
  imgUrl: string | undefined;
}

export const Icon: React.FC<IconProps> = ({ act, imgUrl }) => {
  return (
    <IconContainer>
      <img src={imgUrl} alt={act} />
    </IconContainer>
  );
};

export const IconArrow: React.FC<IconProps> = ({ act, imgUrl }) => {
  return (
    <IconArrowContainer>
      <img src={imgUrl} alt={act} />
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
