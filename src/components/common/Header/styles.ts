import styled from '@emotion/styled';
import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';

export const HeaderWrap = styled.div<{ path: string }>`
  max-width: 1660px;
  width: 100%;
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
    gap: 1.5rem;
  }
`;

export const NavLogin = styled(HiOutlineUserCircle)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

export const NavMenu = styled(IoMenu)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;
