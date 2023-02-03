import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';

import { darkTheme } from '@/themes';

import '@/styles/globals.css';

function App({ Component, pageProps, ...rest }: AppProps) {
  console.log(rest);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = function async(appContext: AppContext) {
  const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };

  const validThemes = ['ligth', 'dark', 'custom'];

  return {
    theme: validThemes.includes(theme) ? theme : 'dark',
  };
};

export default App;
