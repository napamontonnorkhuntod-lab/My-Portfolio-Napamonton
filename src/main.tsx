import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/font.css";
import App from './App.tsx'



import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/config/them.ts';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
