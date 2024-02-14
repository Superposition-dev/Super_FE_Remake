import styled from '@emotion/styled';

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

export const SubTitle = styled.h2`
  ${({ theme }) => theme.font.medium_14};
`;
