import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 25px;

  & + div {
    margin-top: 8px;
  }

  &.isAnswered {
    background: ${({ theme }) => theme.colors.gray700};
  }

  &.isHighlighted {
    background: ${({ theme }) => theme.colors.gray400};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.color};
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.gray300};
    font-size: 14px;
  }
`

export const MenuButton = styled.div`
  display: flex;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${({ theme }) => theme.colors.gray300};
      gap: 8px;

      &.liked {
        color: ${({ theme }) => theme.colors.purple};

        svg path {
          stroke: ${({ theme }) => theme.colors.purple};
        }
      }
    }

    &:hover {
      filter: brightness(0.2);
    }
  }
`
