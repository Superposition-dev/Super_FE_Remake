import { ValidateNickNameType } from '@/interface/signup';
import styled from '@emotion/styled';

export const UserInfoTopWrap = styled.div`
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

export const Text = styled.input<{ isEdit: boolean }>`
  width: 100%;
  padding: 0.5rem 0;
  ${({ theme }) => theme.font.medium_14};
  border-bottom: 2px solid ${({ isEdit, theme }) => (isEdit ? theme.colors.white : theme.colors.dark_gray)};
  color: ${({ isEdit, theme }) => (isEdit ? theme.colors.white : theme.colors.dark_gray)};
`;

export const Desc = styled.p<{ validate: ValidateNickNameType }>`
  padding-top: 0.375rem;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme, validate }) =>
    validate === ValidateNickNameType.default
      ? theme.colors.white
      : ValidateNickNameType.error
      ? '#FF334B'
      : ValidateNickNameType.success
      ? '#07FA6A'
      : ''};
`;
