import React from 'react';
import styled from 'styled-components';

interface IconProps {
  act: string | null;
  imgUrl: string;
}

const Icon: React.FC<IconProps> = ({ act, imgUrl }) => {
  return (
    <IconContainer>
      <IconImage src={imgUrl} alt="Icon" />
    </IconContainer>
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
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export default Icon;
