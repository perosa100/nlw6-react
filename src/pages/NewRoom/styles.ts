import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const HeaderLogo = styled.aside`
  flex: 7;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px ${({ theme }) => theme.font.family};
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
`
export const Heading = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
`

export const Content = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }
`
export const ContentButtonGoogle = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const FormContent = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }
`

export const ClassRoomContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.border};
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    margin-right: 16px;
  }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    margin-left: 16px;
  }
`

export const GoRoom = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-top: 16px;

  a {
    color: ${({ theme }) => theme.colors.pink};
  }
`
