import styled from '@emotion/styled';
import { MasonryGrid } from '@egjs/react-grid';

export const MyLikeWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 7rem 1rem 2rem;
`;

export const TitleWrap = styled.div`
  text-align: center;
  margin-top: 6rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.font.title};
  font-family: 'sangju';
  font-weight: 500;
`;

export const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
`;

export const Products = styled(MasonryGrid)<{ maxScroll: number }>`
  max-width: 1200px;
  min-height: calc(max(100vh, ${({ maxScroll }) => maxScroll}px) - 20rem);
  width: 100%;
  /* height: auto !important; */
`;

export const NoResultWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn}
  ${({ theme }) => theme.flex.flexCenter}
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
`;

export const NoResult = styled.p`
  width: 100%;
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-wrap;
  text-align: center;
`;

export const CatImage = styled.img`
  width: 50%;
  height: auto;
`;
