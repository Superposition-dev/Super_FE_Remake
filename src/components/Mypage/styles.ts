import styled from '@emotion/styled';

export const MypageWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 2rem;
  padding: 1rem 0.5rem;
  width: 100%;
  height: 100%;
  overflow: auto;
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

export const NoticeWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  height: 100%;
`;

export const Message = styled.h2`
  ${({ theme }) => theme.font.regular_14};
  ${({ theme }) => theme.colors.white};
`;
