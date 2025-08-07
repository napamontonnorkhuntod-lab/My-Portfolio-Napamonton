import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans Thai', 'Roboto', sans-serif`,
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
      lg: 1024,  // ปรับให้ตรงกับ Tailwind
      xl: 1280,
    },
  },
});

export default theme;
