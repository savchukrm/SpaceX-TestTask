import React from 'react';
import styled from 'styled-components';

interface NavButtonProps {
  title: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title }) => {
  return <NavButtonElement>{title}</NavButtonElement>;
};

const NavButtonElement = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  background: transparent;
`;

export default NavButton;
