import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

    html {
      font-size: 62.5%;
    }

    body {
      color: ${({ theme }) => theme.colors.color};
      background-color: ${({ theme }) => theme.colors.background};
    }

    body,input,button,textarea{
      font:400 16px ${({ theme }) => theme.font.family};
    }
`

export default GlobalStyles
