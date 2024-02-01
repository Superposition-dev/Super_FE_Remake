import { MasonryGrid } from '@egjs/react-grid';
import styled from '@emotion/styled';

export const ExhibitionDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
`;

export const ProductsTitleWrap = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductsTitle = styled.h1`
  ${({ theme }) => theme.font.title};
  font-family: 'sangju';
  font-weight: 500;
`;

export const ProductsSubTitle = styled.h2`
  ${({ theme }) => theme.font.medium_14};
`;

export const ExhibitionDetailWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  width: 100%;
  padding-top: 1.5rem;
`;

export const Authors = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

export const Products = styled(MasonryGrid)<{ maxScroll: number }>`
  max-width: 1200px;
  min-height: calc(max(100vh, ${({ maxScroll }) => maxScroll}px) - 20rem);
  width: 100%;
  height: auto !important;
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
