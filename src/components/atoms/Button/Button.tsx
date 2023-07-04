import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ButtonElement>{text}</ButtonElement>;
};

const ButtonElement = styled.button`
  display: flex;
  width: 163px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #d3eaff;
  color: #000;
  font-size: 24px;
  font-family: Syne;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
`;

export default Button;
