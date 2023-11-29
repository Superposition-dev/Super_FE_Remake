import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderWrap = styled.div<{ path: string }>`
  width: 100%;
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: ${({ theme, path }) => (path === '/' ? 'transprent' : theme.colors.black)};
  @media (max-width: 768px) {
    height: 5rem;
    padding: 1rem 2rem;
  }
`;

export const LogoWrap = styled(Link)`
  @media (max-width: 768px) {
    width: 24vh;
  }
  @media (max-width: 429px) {
    width: 16vh;
  }
`;

export const NavWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  gap: 2rem;
`;
export const NavItem = styled(Link)`
  ${({ theme }) => theme.font.regular_14};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
