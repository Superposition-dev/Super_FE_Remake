import { MasonryGrid } from '@egjs/react-grid';
import styled from '@emotion/styled';

export const ProductsContainer = styled.div`
  width: 100%;
  padding: 6rem 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsTitleWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProductsTitle = styled.h1`
  ${({ theme }) => theme.font.title};
  font-family: 'sangju';
  font-weight: 500;
`;

export const ProductsSubTitle = styled.h2`
  ${({ theme }) => theme.font.medium_14};
`;

export const Authors = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Products = styled(MasonryGrid)`
  width: 100%;
  height: auto !important;
  margin-top: 3rem;
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
