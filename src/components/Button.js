import React from 'react';

import styled from 'styled-components';


const StyledButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  padding: .5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ theme }) => theme.backgroundAlt};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children }) => (
  <StyledButton>
    { children}
  </StyledButton>
);

export default Button;
