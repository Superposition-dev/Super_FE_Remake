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
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 16rem;
  padding: 2.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  opacity: 100%;
  z-index: 200;
`;

export const ModalInnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ModalTitleWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;

export const ModalTitle = styled.p`
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const ModalSubTitle = styled.p`
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.dark_gray};
  text-align: center;
`;

export const ModalButtonWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow}
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: center;
  width: 108px;
  height: 42px;
  border-radius: 0.75rem;
  ${({ theme }) => theme.font.medium_12};
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.dark_navy};
  cursor: pointer;
`;

export const KaKaoButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter}
  gap: 0.5rem;
  width: 108px;
  height: 42px;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  cursor: pointer;
`;

export const KaKaoText = styled.p`
  ${({ theme }) => theme.font.medium_12};
  color: ${({ theme }) => theme.colors.black};
`;
