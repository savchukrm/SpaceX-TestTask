import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import logoSvg from '../../../assets/images/logo.svg';

const LogoImage = styled.img`
  width: 229px;
  height: 42px;
`;

const Logo = () => {
  return (
    <div>
      <LogoImage src={logoSvg} alt="logo" />
    </div>
  );
};

export default Logo;
