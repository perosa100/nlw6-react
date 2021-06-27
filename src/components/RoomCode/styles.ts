import styled from 'styled-components'

export const ButtonCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  transition: filter 0.2s;

  display: flex;

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
export const Image = styled.div`
  background: ${({ theme }) => theme.colors.purple};
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
