import styled from '@emotion/styled';

export const ExhibitionsWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  ${({ theme }) => theme.flex.flexCenter};
  justify-content: space-between;
  width: 100%;
  height: 42px;
  padding: 10px 0;
  ${({ theme }) => theme.font.bold_20};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FilterWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  ${({ theme }) => theme.flex.flexCenter};
  gap: 20px;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const Filter = styled.button<{ active: boolean }>`
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  ${({ active, theme }) => (active === true ? theme.font.bold_12 : theme.font.regular_12)};
`;
