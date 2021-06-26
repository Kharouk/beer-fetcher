import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#0ad19f',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
