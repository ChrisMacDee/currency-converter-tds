import '@mantine/core/styles.css';
import './index.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  colors: {
    // customise if you want
  },
});

// Sets up font awesome icons
library.add(fas, far, fab)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);