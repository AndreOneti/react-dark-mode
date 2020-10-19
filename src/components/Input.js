import React from 'react';

import styled from 'styled-components';


const StyledInput = styled.input`
  border: 1px solid #dcdcdc;
  color: #333;
  font-size: 2rem;
  padding: .5rem 1rem;
  border-radius:5px;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  }
`;

const Input = () => (
  <StyledInput />
);

export default Input;
