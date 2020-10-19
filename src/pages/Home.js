import React from 'react';

import Container from '../components/Container';
import Button from '../components/Button';
import Title from '../components/Title';
import Input from '../components/Input';

function pages() {
  return (
    <Container>
      <Title>Dark Mode with Styled Components</Title>
      <Input />
      <Button>My Button</Button>
      <Button>DarkMode</Button>
    </Container>
  );
}

export default pages;
