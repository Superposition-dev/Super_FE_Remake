import styled from '@emotion/styled';
import { MasonryGrid } from '@egjs/react-grid';

export const MyFollowWrap = styled.div`
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

export const AuthorsWrap = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  place-items: center;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
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
