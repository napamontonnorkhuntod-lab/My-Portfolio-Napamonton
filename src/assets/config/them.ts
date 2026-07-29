import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: `'Roboto', 'NotoSansThai', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.5 },
  },
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',    
      secondary: '#ffffff',   
      disabled: '#aaaaaa',   
    },
    background: {
      default: '#121212',     
      paper: '#1e1e1e',       
    },
  },
  breakpoints: { 
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
