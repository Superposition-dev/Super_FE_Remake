import { MasonryGrid } from '@egjs/react-grid';
import styled from '@emotion/styled';

export const ExhibitionDetailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 7rem 1rem 2rem;
`;

export const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
`;

export const AuthorsWrap = styled.div`
  width: 100%;
`;

export const Authors = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  overflow: auto;
`;

export const Products = styled(MasonryGrid)<{ maxScroll: number }>`
  max-width: 1200px;
  width: 100%;
`;

export const NoResult = styled.div`
  width: 100%;
  height: 40vh;
  ${({ theme }) => theme.font.bold_20};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
