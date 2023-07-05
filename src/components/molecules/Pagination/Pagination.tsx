import React from 'react';
import styled from 'styled-components';

import PaginationCircle from '../../atoms/PaginationCircle/PaginationCircle';

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationCircle active={true} />
      <PaginationCircle active={false} />
      <PaginationCircle active={false} />
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export default Pagination;
