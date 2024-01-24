import styled from '@emotion/styled';
import Link from 'next/link';
export const HeaderWrap = styled.div<{ path: string }>`
  max-width: 1660px;
  width: 100%;
  height: 10rem;
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  /* background-color: ${({ theme, path }) => (path === '/' ? 'transprent' : theme.colors.black)}; */
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2rem 7rem;
  @media (max-width: 768px) {
    height: 5rem;
    padding: 1rem 2rem;
  }
`;

export const LogoWrap = styled(Link)`
  position: relative;
    width: 250px;
    height: 33px;
  @media (max-width: 768px) {
    width: 150px;
    height: 20px;
  }
`;

export const NavWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  gap: 4rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
export const NavItem = styled(Link)<{active:boolean}>`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  border-bottom: ${({active})=>active?`2px solid #fff`:'none'};
  ${({ theme }) => theme.font.bold_24};
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_14};
  }
`;
