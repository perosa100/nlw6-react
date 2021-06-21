import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
