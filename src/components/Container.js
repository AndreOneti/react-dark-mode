import React from 'react';

import styled from 'styled-components';


const StyledContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = ({ children }) => (
  <StyledContainer>
    { children}
  </StyledContainer>
);

export default Container;
