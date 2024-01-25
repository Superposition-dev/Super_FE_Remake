import styled from '@emotion/styled';

export const SignupWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 3.5rem;
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
  gap: 2.5rem;
  width: 80%;
`;
