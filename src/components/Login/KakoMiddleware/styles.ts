import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
  ${({ theme }) => theme.layout.flexColumn};
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const LoadingWrap = styled.div`
  max-width: 580px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 2.4rem;
  @media (max-width: 768px) {
    padding-top: 0;
    justify-content: center;
    gap: 8rem;
  }
`