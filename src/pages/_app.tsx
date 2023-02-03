import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

import { darkTheme } from '@/themes';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
