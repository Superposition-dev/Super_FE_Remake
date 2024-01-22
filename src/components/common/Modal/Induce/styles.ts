import styled from '@emotion/styled';
import { IoClose } from 'react-icons/io5';

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
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
  width: 88%;
  height: 220px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  opacity: 100%;
  z-index: 200;
`;

export const CloseButton = styled(IoClose)`
  align-self: flex-end;
  width: 1.625rem;
  height: 1.625rem;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const ModalInnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  ${({ theme }) => theme.flex.flexCenter}
  justify-content: space-between;
  width: 100%;
  height: 80%;
`;

export const ModalTitle = styled.p`
  ${({ theme }) => theme.font.regular_14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  text-align: center;
`;

export const ModalButtonWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  ${({ theme }) => theme.flex.flexCenter}
  gap: 1rem;
  width: 100%;
`;

export const KaKaoButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter}
  gap: 1rem;
  width: 100%;
  height: 52px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  cursor: pointer;
`;

export const KaKaoText = styled.p`
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.black};
`;

export const CancelText = styled.p`
  ${({ theme }) => theme.font.bold_10};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: underline;
  cursor: pointer;
`;
