import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../styles/themes/main'
import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
