import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <TitleContainer>
      <H5>the space is waiting for</H5>
      <H1>you</H1>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  color: #fff;
  font-family: Syne;
  text-transform: uppercase;
  margin-top: 170px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const H5 = styled.h5`
  margin: 0;
  font-size: 48px;
  font-weight: 800;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 310px;
  font-weight: 800;
`;

export default Title;