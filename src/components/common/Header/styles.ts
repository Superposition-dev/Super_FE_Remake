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
    height: 5.5rem;
    padding: 1rem;
  }
`;

export const LogoWrap = styled.div`
  width: 12rem;
`;

export const NavWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  gap: 2rem;
`;
export const NavItem = styled.div`
  ${({ theme }) => theme.font.regular_12};
  cursor: pointer;
`;
