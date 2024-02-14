import { ValidateNickNameType } from '@/interface/signup';
import styled from '@emotion/styled';

export const UserInfoCommonWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.dark_navy};
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.bold_20};
  ${({ theme }) => theme.colors.white};
`;

export const EmailWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const KakaoWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.kakao};
`;

export const KakaoSymbol = styled.img`
  width: 70%;
  height: 70%;
`;

export const Email = styled.p`
  width: 85%;
  padding: 0.5rem 0;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.dark_gray};
  ${({ theme }) => theme.layout.ellipsis}
`;

export const Text = styled.input<{ bright?: boolean; validate?: ValidateNickNameType }>`
  width: 100%;
  padding: 0.5rem 0;
  ${({ theme }) => theme.font.medium_14};
  border-bottom: 2px solid
    ${({ bright, validate, theme }) =>
      bright
        ? validate === ValidateNickNameType.error || validate === ValidateNickNameType.duplicate
          ? theme.colors.error
          : theme.colors.white
        : validate === ValidateNickNameType.error || validate === ValidateNickNameType.duplicate
        ? theme.colors.error
        : theme.colors.dark_gray};
  color: ${({ bright, theme }) => (bright ? theme.colors.white : theme.colors.dark_gray)};
`;

export const Desc = styled.p<{ validate: ValidateNickNameType }>`
  padding-top: 0.375rem;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme, validate }) =>
    validate === ValidateNickNameType.default
      ? theme.colors.dark_gray
      : validate === ValidateNickNameType.error || validate === ValidateNickNameType.duplicate
      ? theme.colors.error
      : validate === ValidateNickNameType.success
      ? theme.colors.success
      : ''};
`;

export const UserInfoBottomWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.dark_navy};
`;

export const UserInfoYearWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.75rem;
  width: 30%;
  ${({ theme }) => theme.font.medium_14};
`;

export const BirthYearWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const BirthYear = styled.input<{ bright: boolean }>`
  width: 48%;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme, bright }) => (bright ? theme.colors.white : theme.colors.dark_gray)};

  &:disabled {
    color: ${({ theme }) => theme.colors.dark_gray};
  }
`;

export const UserInfoGenderWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.75rem;
  width: 52%;
  ${({ theme }) => theme.font.medium_14};
`;

export const GendersWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 2rem;
`;

export const GenderWrap = styled.label`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1rem;
`;

export const RadioButton = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.dark_gray};
  appearance: none;

  &:checked {
    border: 2px solid ${({ theme }) => theme.colors.white};

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 70%;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.light_purple};
      transform: translate(-50%, -50%);
    }
  }
`;
