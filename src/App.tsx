import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles.styled';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
