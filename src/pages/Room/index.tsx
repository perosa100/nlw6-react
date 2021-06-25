import LogoImg from '../../assets/images/logo.svg'
import * as S from './styles'
import { Button } from './../../components/Button/index'

function Room() {
  return (
    <S.Container>
      <header>
        <S.Content>
          <img src={LogoImg} alt="Letmeask" />
          <div>código</div>
        </S.Content>
      </header>

      <S.Main>
        <S.Content>
          <S.ContentTitle>
            <h1>Sala React</h1>
            <span>4 pergunta</span>
          </S.ContentTitle>
        </S.Content>

        <S.FormContent>
          <textarea placeholder="O que você quer Perguntar?" />
          <S.FormContentFooter>
            <span>
              Para enviar uma pergunta, <button>faça seu Login</button>.
            </span>
            <Button type="submit">Enviar Pergunta</Button>
          </S.FormContentFooter>
        </S.FormContent>
      </S.Main>
    </S.Container>
  )
}

export default Room
