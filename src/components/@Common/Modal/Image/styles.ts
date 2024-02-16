import { ValidateEmailType } from '@/interface/common';
import styled from '@emotion/styled';
import { IoClose } from 'react-icons/io5';

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 60%;
  z-index: 200;
`;

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  ${({ theme }) => theme.flex.flexColumn}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navy};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  opacity: 100%;
  z-index: 200;
`;

export const ModalInnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
`;

export const TitleWrap = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.flexRow}
  justify-content: center;
  width: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
`;

export const Close = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  width: 100%;
`;

export const CustomButton = styled.button`
  width: 100%;
  padding: 1.75rem 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: start;
`;
