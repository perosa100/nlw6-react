import { ReactNode } from 'react'
import * as S from './styles'

interface QuestionProps {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isHighlighted?: boolean
  isAnswered?: boolean
}

export const Question: React.FC<QuestionProps> = ({
  author,
  content,
  children,
  isHighlighted = false,
  isAnswered = false
}) => {
  return (
    <S.Container
      className={`${isAnswered ? 'isAnswered' : ''} ${
        isHighlighted && !isAnswered ? 'isHighlighted' : ''
      }`}
    >
      <S.Title>{content}</S.Title>

      <S.Footer>
        <S.UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </S.UserInfo>

        <S.MenuButton>{children}</S.MenuButton>
      </S.Footer>
    </S.Container>
  )
}
