import styled, { css } from 'styled-components'

type WrapperProps = {
  isOutlined: boolean
}
export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, isOutlined }) => css`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${isOutlined
      ? `${theme.colors.white}`
      : `${theme.colors.purple}`};
    color: ${isOutlined ? `${theme.colors.purple}` : `${theme.colors.white}`};
    border: ${isOutlined ? `1px solid ${theme.colors.purple}` : 'none'};
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`
