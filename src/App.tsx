import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Routes } from 'routes'
import { AuthContext } from './context/AuthContext'

function App() {
  return (
    <AuthContext>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </AuthContext>
  )
}

export default App
