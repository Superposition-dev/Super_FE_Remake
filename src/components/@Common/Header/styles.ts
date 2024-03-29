import styled from '@emotion/styled';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { GrMenu } from 'react-icons/gr';

export const HeaderWrap = styled.div<{ path: string }>`
  max-width: 1660px;
  width: 100%;
  height: 10rem;
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: ${({ theme, path }) => (path === '/' ? 'transprent' : theme.colors.black)};
  top: 0;
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
  align-items: center;
  gap: 4rem;
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const NavLogin = styled(BiUser)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

export const NavMenu = styled(GrMenu)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;
