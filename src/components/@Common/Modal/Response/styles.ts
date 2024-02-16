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
  top: 50%;
  left: 50%;
  ${({ theme }) => theme.flex.flexColumn}

  width: 75%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  opacity: 100%;
  z-index: 200;
`;

export const ModalInnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.flex.flexCenter}
  width: 100%;
  height: 70%;
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const ModalButtonWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow}
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: center;
  width: 100%;
  height: 30%;
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter}
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.font.bold_12};
  color: ${({ theme }) => theme.colors.dark_gray};
`;
