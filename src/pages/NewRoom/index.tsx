import * as S from './styles'
import IllustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/index'
import { Link, useHistory } from 'react-router-dom'
import { useAuthGoogle } from 'context/AuthContext'
import { FormEvent, useState } from 'react'
import { database } from 'services/firebase'

export function NewRoom() {
  const history = useHistory()

  const { user } = useAuthGoogle()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorid: user.id
    })

    history.push(`rooms/${firebaseRoom.key}`)
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

          <S.Heading> Criar uma Nova Sala</S.Heading>

          <S.FormContent onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit">Criar a Sala</Button>
          </S.FormContent>
          <S.GoRoom>
            Quer entrar em um sala existente?{'\n'}
            <Link to="/"> Clique Aqui</Link>
          </S.GoRoom>
        </S.ContentInfo>
      </S.Content>
    </S.Wrapper>
  )
}
