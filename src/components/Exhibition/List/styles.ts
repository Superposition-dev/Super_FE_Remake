import styled from '@emotion/styled';

export const ExhibitionList = styled.section`
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: auto;
`;
