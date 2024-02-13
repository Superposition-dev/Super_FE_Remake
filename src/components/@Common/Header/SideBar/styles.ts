import styled from '@emotion/styled';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export const BackgroundWrap = styled.div<{ open: boolean }>`
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 40%;
  z-index: 199;
`;

export const SideBarWrap = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')};
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  gap: 3rem;
  width: 60%;
  height: 100%;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.purple};
  transition: 0.5s;
  z-index: 200;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
`;

export const ArrowImage = styled(IoIosArrowBack)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const MenuTitle = styled.div`
  font-weight: 500;
  ${({ theme }) => theme.font.bold_24};
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_20};
  }
`;
