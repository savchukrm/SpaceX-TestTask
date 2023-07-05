import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import ArrowDown from '../../../assets/images/arrowdown.svg';

interface ButtonProps {
  text: string;
}

export const SignInButton: React.FC<ButtonProps> = ({ text }) => {
  return <SignInElement>{text}</SignInElement>;
};

export const ExploreTourButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <ExploreTourElement>
      {text}
      <img src={ArrowDown} alt="arrow-down" />
    </ExploreTourElement>
  );
};

export const CardButton: React.FC<ButtonProps> = ({ text }) => {
  return <CardButtonElement>{text}</CardButtonElement>;
};

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  border: none;
`;

const SignInElement = styled(BaseButton)`
  background: #d3eaff;
  color: #000;
`;

const ExploreTourElement = styled(BaseButton)`
  color: #fff;
  font-size: 32px;
  font-family: Lato;
  font-weight: 300;
  background: transparent;
  gap: 8px;
  margin: 0 auto;
`;

const CardButtonElement = styled(BaseButton)`
  background: #e6e6e6;
  color: #777;
`;
