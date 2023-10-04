import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../styles/themes/main';
import { GlobalStyle } from '../styles/global';
import { LanguageContext } from "../contexts/LanguageContext";
import { useRouter } from 'next/router';

import ptPack from '../strings/pt.json';
import enPack from '../strings/en.json';
import esPack from '../strings/es.json';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [language, setLanguage] = useState(router.defaultLocale!);

  const translations: any = {
    'pt-BR': ptPack,
    'en-US': enPack,
    'es': esPack
  };
  
  function setCurrentLanguage(lang: string) {
    setLanguage(lang);
  }
  const langPack = translations[language];
  
  return (
    <ThemeProvider theme={mainTheme}>
      <LanguageContext.Provider value={{ langPack, language, setCurrentLanguage }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}