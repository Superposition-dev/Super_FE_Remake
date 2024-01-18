import styled from '@emotion/styled';

export const PosterSection = styled.section`
  ${({ theme }) => theme.layout.overFlowHidden};
  position: relative;
  padding: 5rem 0;
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
  @media (max-width: 429px) {
    width: 50%;
  }
  @media (max-width: 390px) {
    width: 53%;
  }
  @media (max-width: 385px) {
    width: 45%;
  }
`;

export const PosterTitleWrap = styled.div`
  width: 90%;
  margin-top: -3vh;
`;

export const PosterTitle = styled.h3`
  font-family: 'sangju';
  ${({ theme }) => theme.font.bold_3vh};
  font-weight: 500;
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
  width: 90%;
  ${({ theme }) => theme.font.regular_14};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 1rem;
  word-break: keep-all;
  white-space: pre-wrap;
`;
