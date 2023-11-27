import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const PosterSection = styled.section`
  ${({ theme }) => theme.layout.overFlowHidden};
  position: relative;
  padding: 7rem 0;
`;

export const TitleWrap = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-family: 'lemon';
  ${({ theme }) => theme.font.title};
`;

export const SubTitle = styled.h3`
  ${({ theme }) => theme.font.medium_14};
`;

export const PosterInfoWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const PosterImage = styled.div`
  height: auto;
  img {
    border-radius: 1rem;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 411px) {
    width: 55%;
  }
  @media (max-width: 380px) {
    width: 45%;
  }
`;

export const PosterTitleWrap = styled.div`
  width: 80%;
  margin-top: -1.6rem;
`;

export const PosterTitle = styled.h3`
  ${({ theme }) => theme.font.bold_20};
`;

export const PosterSubWrap = styled.div`
  ${({ theme }) => theme.font.regular_12};
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const PosterSubTitle = styled.p`
  ${({ theme }) => theme.font.bold_10};
`;

export const More = styled.div``;

export const PosterInfo = styled.p`
  width: 80%;
  ${({ theme }) => theme.font.regular_14};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 1rem;
  word-break: keep-all;
  white-space: pre-wrap;
`;
