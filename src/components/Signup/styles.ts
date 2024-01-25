import styled from '@emotion/styled';

export const SignupWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 4rem;
  width: 100%;
  height: 100%;
`;

export const SignupTopWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
`;

export const SignupBottomWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 2rem;
  width: 95%;
`;

export const SignupButton = styled.button`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  height: 4.5rem;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.purple};
`;
