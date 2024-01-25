import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 5rem 0;
`;

export const TitleWrap = styled.div`
  text-align: center;
  height: 10vh;
  margin-top: 5rem;
  @media (max-width: 768px) {
    height: 7vh;
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

export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

export const ImageSwiperWrap = styled(Swiper)`
  width: 100%;
  margin: 1vh 0;
  margin-bottom: 2rem;
  height: 43rem;
  .swiper-slide {
    width: 60rem;
    height: 43rem;
  }
  @media (max-width: 768px) {
    height:100%;
    .swiper-slide {
      width: 100%;
      height: 18.5rem;
    }
  }
`;

export const ImageSwiper = styled(SwiperSlide)`
  width: 100%;
  height: 43rem;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 768px) {
    border-radius: 0;

    img {
      width: 100%;
      height: 40%;
    }
  }
`;

export const PartnerWrap = styled.div`
  width: 100%;
  display:none;
  @media (max-width: 768px) {
    display:block;
  }
`

export const PartnerContentWrap = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
    @media (max-width: 768px) {
    display: none;
  }
`;

export const PartnerImageWrap = styled.div`
  margin-bottom: 2rem;
  padding-top: 1rem;
  img {
    position: relative !important;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

`;

export const ContentWrap = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrap = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const ContentTitle = styled.h3`
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_20};
    margin-bottom: 1rem;
  }
`;

export const ContentDesc = styled.p`
  width: 93%;
  font-size: 2rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  word-break: keep-all;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_14};
  }
`;
