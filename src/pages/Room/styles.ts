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
export const FormContent = styled.div`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray200};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`
export const FormContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray300};
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.purple};
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer; 
    }
  }
`
