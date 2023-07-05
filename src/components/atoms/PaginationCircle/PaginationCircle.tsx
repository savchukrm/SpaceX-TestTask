import React from 'react';
import styled, { css } from 'styled-components';

interface CircleContainerProps {
  active: boolean;
}

const PaginationCircle = ({ active }: CircleContainerProps) => {
  return <CircleContainer active={active} />;
};

const CircleContainer = styled.div<CircleContainerProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: transparent;
  margin: 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;

      position: relative;

      &::after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 70%;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;

export default PaginationCircle;
