'use client';
import { Thasadith } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const thasadith = Thasadith({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: thasadith.style.fontFamily,
  },
  palette:{
    primary: {
        main: '#000',
    }
  }
});

export default theme;
