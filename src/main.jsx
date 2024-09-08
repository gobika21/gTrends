import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App.jsx';
import './index.css';
// import AppRouter from './routes/routes.jsx';

import { BrowserRouter } from "react-router-dom";

const theme = createTheme({});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </StrictMode>
  </BrowserRouter>
)
