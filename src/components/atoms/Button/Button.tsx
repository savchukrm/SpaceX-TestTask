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

export const ClearAllButton = () => {
  return <ClearAllElement>Clear all</ClearAllElement>;
};

const BaseButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
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
  width: 278px;
  padding: 12px 0px;

  background: #d3eaff;

  font-size: 24px;
  font-family: Syne;
  font-weight: 600;
`;

const ClearAllElement = styled.button`
  color: #556b84;
  font-size: 24px;
  font-family: Lato;
  font-weight: 300;
  background: transparent;
  border: none;
  cursor: pointer;
`;
