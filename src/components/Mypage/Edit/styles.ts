import styled from '@emotion/styled';

export const MyEditWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 4rem;
  width: 100%;
  height: 100%;
`;

export const MyEditTopWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
`;

export const MyEditBottomWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 1rem;
  width: 100%;
`;

export const ButtonWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const EditButton = styled.button`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  height: 4.5rem;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.white};

  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }
  cursor: pointer;
`;

export const CancelButton = styled.button`
  position: absolute;
  bottom: -3rem;
  left: 0;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.light_gray};
`;
