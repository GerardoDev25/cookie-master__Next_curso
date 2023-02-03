import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';
import cookies from 'js-cookie';

import { customTheme, darkTheme, lightTheme } from '@/themes';

import '@/styles/globals.css';
import { useEffect, useState } from 'react';

interface Props extends AppProps {
  theme: string;
}

function App({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookietheme = cookies.get('theme') || 'light';

    const selectedTheme: Theme =
      cookietheme === 'light' ? lightTheme : cookietheme === 'dark' ? darkTheme : customTheme;
    setCurrentTheme(selectedTheme);
  }, [setCurrentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// App.getInitialProps = function async(appContext: AppContext) {
//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };

//   const validThemes = ['ligth', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   };
// };

export default App;
