import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';

import { customTheme, darkTheme, lightTheme } from '@/themes';

import '@/styles/globals.css';

interface Props extends AppProps {
  theme: string;
}

function App({ Component, pageProps, theme }: Props) {
  const currentTheme: Theme =
    theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;

  return (
    <ThemeProvider theme={currentTheme}>
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
