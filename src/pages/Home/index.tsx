import { ReactNode } from 'react'

import { Container } from './styles'

interface HomeProps {
  children: ReactNode
}

function Home({ children }: HomeProps) {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}

export default Home