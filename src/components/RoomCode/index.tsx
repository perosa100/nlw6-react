import * as S from './styles'

import copyImg from '../../assets/images/copy.svg'

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <S.ButtonCode onClick={copyRoomCodeToClipboard}>
      <S.Image>
        <img src={copyImg} alt="CopyRoomCode" />
      </S.Image>
      <span>{code}</span>
    </S.ButtonCode>
  )
}
