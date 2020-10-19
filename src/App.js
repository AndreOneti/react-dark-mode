import React from 'react';

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

const theme = {
  backgroundAlt: '#fdfdfd',
  background: '#dcdcdc',
  border: '#dcdc',
  text: '#333',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
