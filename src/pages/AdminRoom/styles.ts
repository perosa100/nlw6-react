import styled from 'styled-components'

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`
export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`
export const ContentTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.color};
  }

  span {
    margin-left: 16px;
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 99999px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`

export const User = styled.div`
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
    font-weight: 500;
    font-size: 14px;
  }
`
export const QuestionList = styled.div`
  margin-top: 32px;
`
