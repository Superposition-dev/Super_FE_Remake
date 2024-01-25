import styled from '@emotion/styled';

export const PosterSection = styled.section`
  ${({ theme }) => theme.layout.overFlowHidden};
  position: relative;
  margin-top: 5rem;
  @media (max-width: 768px) {
    padding: 5rem 0;
    margin-top: 0;
  }
`;

export const TitleWrap = styled.div`
  text-align: center;
  height: 10vh;
  margin-top: 5rem;
  @media (max-width: 768px) {
    height: 5vh;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-family: 'lemon';
  font-size: 4rem;

  margin-bottom: 1rem;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.title};
    font-weight: 400;
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
@media (max-width: 768px) {

  ${({ theme }) => theme.font.medium_14};
}
`;

export const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`

export const PosterInfoWrap = styled.div`
  width: 30vw;
  height: 100%;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 3rem;
  border-radius: 1rem;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    background-color: transparent;
    padding: 0;
    padding-top: 2rem;
  }
`;

export const PosterImage = styled.div`
  width: 30rem;
  height: 42rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: cover;  
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 50%;
    height: 100%;
    z-index: -1;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 70%;
    margin-top: -4vh;
    margin-bottom: 1rem;
  }
`

export const PosterTitleWrap = styled.div`
  width: 100%;
`;

export const PosterTitle = styled.h3`
  font-family: 'sangju';
  font-size: 3.8rem;
  font-weight: 400;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_3vh};
    font-weight: 500;
  }
`;

export const PosterSubWrap = styled.div`
  ${({ theme }) => theme.font.regular_12};
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const PosterSubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_10};
  }
`;

export const More = styled.div``;

export const PosterInfo = styled.p`
  width: 90%;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 2rem;
  margin-top: 1rem;
  word-break: keep-all;
  white-space: pre-wrap;
  line-height: 1.5;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_14};
  }
`;
