import * as S from './styles'
import IllustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'
import GooggleIconImg from '../../assets/images/google-icon.svg'
import { Button } from './../../components/Button/index'
import { useHistory } from 'react-router-dom'
import { useAuthGoogle } from 'context/AuthContext'

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuthGoogle()

  async function handreCreateRoow() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  return (
    <S.Wrapper>
      <S.HeaderLogo>
        <img src={IllustrationImg} alt="IllustrationImg" />
        <strong>Crie salas de Q&amp;a ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência ao vivo.</p>
      </S.HeaderLogo>

      <S.Content>
        <S.ContentInfo>
          <img src={LogoImg} alt="LetMeask" />

          <S.ContentButtonGoogle onClick={handreCreateRoow}>
            <img src={GooggleIconImg} alt="GoogleImage" />
            Crie sua sala com o google
          </S.ContentButtonGoogle>

          <S.ClassRoomContent>ou entre em uma sala</S.ClassRoomContent>

          <S.FormContent>
            <input type="text" placeholder="Digite o Código da sala" />
            <Button type="submit">Entrar na Sala</Button>
          </S.FormContent>
        </S.ContentInfo>
      </S.Content>
    </S.Wrapper>
  )
}
