import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...rest }: ButtonProps) {
  return <S.WrapperButton {...rest} />
}
