import styled from "@emotion/styled";

export const LoginContainer = styled.div`
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

export const LoginWrap = styled.div`
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
  @media (max-width: 768px) {
    padding-top: 0;
    justify-content: center;
    gap: 8rem;
  }
`
export const LogoImage = styled.div`
  width: calc(37.5rem * 1.1);
  height: calc(33.4rem * 1.1);
  position: relative;
  img{
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 37.5rem;
    height: 33.4rem;
  }
`

export const TextWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Text = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
`

export const SmallPlanetImage = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  img{
    object-fit: cover;
    object-position: center;
  }
`

export const LoginButtonWrap = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`