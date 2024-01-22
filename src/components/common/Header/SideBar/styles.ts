import styled from '@emotion/styled';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export const BackgroundWrap = styled.div<{ open: boolean }>`
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 40%;
  z-index: 109;
`;

export const SideBarWrap = styled.div<{ open: boolean }>`
  position: absolute;
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
  z-index: 110;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ArrowImage = styled(IoIosArrowBack)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const MenuTitle = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  ${({ theme }) => theme.font.bold_24};
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_20};
  }
`;
