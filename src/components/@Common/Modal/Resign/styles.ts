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

export const DescWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  width: 100%;
`;

export const DescInnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow}
  align-items: center;
  gap: 0.5rem;
`;

export const Dot = styled.span`
  position: relative;
  top: -1px;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.font.regular_12};
`;

export const Desc = styled.p`
  width: 90%;
  ${({ theme }) => theme.font.regular_12};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
`;

export const EmailWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  gap: 0.5rem;
  width: 100%;
`;

export const Email = styled.input<{ bright: boolean; validate: ValidateEmailType }>`
  width: 100%;
  padding: 0.5rem 0;
  ${({ theme }) => theme.font.medium_14};
  border-bottom: 2px solid
    ${({ bright, validate, theme }) =>
      bright
        ? validate === ValidateEmailType.error
          ? theme.colors.error
          : theme.colors.white
        : validate === ValidateEmailType.error
        ? theme.colors.error
        : theme.colors.dark_gray};
  color: ${({ bright, theme }) => (bright ? theme.colors.white : theme.colors.dark_gray)};
`;

export const Validate = styled.p<{ validate: ValidateEmailType }>`
  padding-top: 0.375rem;
  height: 1.8rem;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme, validate }) =>
    validate === ValidateEmailType.error
      ? theme.colors.error
      : validate === ValidateEmailType.success
      ? theme.colors.success
      : ''};
`;

export const ResignButton = styled.button`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  padding: 0 0 1rem;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
  }
  cursor: pointer;
`;
