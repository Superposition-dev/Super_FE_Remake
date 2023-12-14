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
`;

export const Title = styled.h2`
  ${({ theme }) => theme.font.title};
`;

export const SubTitle = styled.h3`
  ${({ theme }) => theme.font.medium_14};
`;

export const ImageSwiperWrap = styled(Swiper)`
  margin: 1vh 0;
`;

export const ImageSwiper = styled(SwiperSlide)`
  position: relative;
  img {
    width: 100%;
    height: 40%;
  }
`;

export const ContentWrap = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const ContentTitle = styled.h3`
  ${({ theme }) => theme.font.bold_20};
  margin-bottom: 1rem;
`;

export const ContentDesc = styled.p`
  width: 93%;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.regular_14};
  word-break: keep-all;
`;
