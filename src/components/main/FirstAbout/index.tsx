import React from 'react';
import * as S from './styles';
import Slide from './Slide';
import { useSwiperSlide, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
const images = [
  '/images/profile1.webp',
  '/images/profile2.webp',
  '/images/profile3.webp',
  '/images/profile4.webp',
  '/images/profile5.webp',
  '/images/profile6.webp',
  '/images/profile7.webp',
  '/images/profile8.webp',
  '/images/profile9.webp',
  '/images/profile10.webp',
];

function FirstAbout() {
  const swiperSlide = useSwiperSlide();
  return (
    <S.AboutSection>
      <S.TitleWrap>
        <S.Title>About us</S.Title>
        <S.SubTitle>광활한 우주를 유영하며</S.SubTitle>
      </S.TitleWrap>
      <S.ImageSwiperWrap
        effect='fade'
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        autoplay={{ delay: 3500 }}
        loop={true}
      >
        <S.ImageSwiper>
          <Image src="/images/aboutImage1.webp" loading="eager" alt="슬라이드 이미지" width={360} height={185} />
        </S.ImageSwiper>
        <S.ImageSwiper>
          <Image src="/images/aboutImage2.webp" loading="eager" alt="슬라이드 이미지" width={360} height={185} />
        </S.ImageSwiper>
        <S.ImageSwiper>
          <Image src="/images/aboutImage3.webp" loading="eager" alt="슬라이드 이미지" width={360} height={185} />
        </S.ImageSwiper>
        <S.ImageSwiper>
          <Image src="/images/aboutImage4.webp" loading="eager" alt="슬라이드 이미지" width={360} height={185} />
        </S.ImageSwiper>
        <S.ImageSwiper>
          <Image src="/images/aboutImage5.webp" loading="eager" alt="슬라이드 이미지" width={360} height={185} />
        </S.ImageSwiper>
      </S.ImageSwiperWrap>
      <S.ContentWrap>
        <S.ContentTitle>기획 전시</S.ContentTitle>
        <S.ContentDesc>
          다양한 작가들을 더 많은 공간에서 만날 수 있도록, 기획 전시를 진행합니다. 연남동과 성수동에서
          10명의 작가님과 기획 전시를 열었습니다. 다음 전시는 어디가 될까요?
        </S.ContentDesc>
      </S.ContentWrap>
      <Slide state={swiperSlide.isActive} images={images} />
      <S.ContentWrap>
        <S.ContentTitle>파트너 작가</S.ContentTitle>
        <S.ContentDesc>
          작가님들의 지속적인 작품 활동을 위해 파트너 작가를 모집하여 꾸준한 협업을 진행합니다. 슈퍼포지션의 더 많은
          활동을 기대해주세요!
        </S.ContentDesc>
      </S.ContentWrap>
    </S.AboutSection>
  );
}

export default FirstAbout;
