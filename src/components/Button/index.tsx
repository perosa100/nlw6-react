import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...rest }: ButtonProps) {
  return <S.WrapperButton {...rest} isOutlined={isOutlined} />
}
