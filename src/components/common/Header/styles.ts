import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: transparent;
  @media (max-width: 768px) {
    height: 6rem;
    padding: 1rem 2rem;
  }
`;

export const LogoWrap = styled.div`
  @media (max-width: 768px) {
    width: 18rem;
  }
  @media (max-width: 411px) {
    width: 15rem;
  }
  @media (max-width: 380px) {
    width: 12rem;
  }
`;

export const NavWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  gap: 2rem;
`;
export const NavItem = styled.div`
  ${({ theme }) => theme.font.regular_14};
  font-weight: 500;
  cursor: pointer;
`;
