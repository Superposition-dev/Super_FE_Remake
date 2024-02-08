import styled from '@emotion/styled';

export const MypageWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;
export const MypageTopWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  justify-content: flex-end;
`;

export const DivisionWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Division = styled.button<{ active: boolean }>`
  ${({ theme }) => theme.flex.flexCenter};
  padding: 0.5rem 1.5rem;
  ${({ theme }) => theme.font.bold_14};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.dark_gray)};
  background-color: ${({ active, theme }) => (active ? theme.colors.purple : theme.colors.black)};
`;
