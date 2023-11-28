import React from 'react';
import * as S from './styles';
import Slide from './Slide';
import { useSwiperSlide, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
const images = [
  'https://i.pinimg.com/474x/83/7e/09/837e095df8cab13f5c99c105d4588ee7.jpg',
  'https://i.pinimg.com/474x/95/2b/f3/952bf3c913b6cc16e23b41f2cbbd72ba.jpg',
  'https://i.pinimg.com/474x/6b/fb/e6/6bfbe6832fe1e55f1a4e8b90c3ffdf95.jpg',
  'https://i.pinimg.com/474x/71/a2/59/71a25978473f713acd94a7dce449729f.jpg',
  'https://i.pinimg.com/474x/45/da/14/45da140bf8074bd48ed29e477780e182.jpg',
  'https://i.pinimg.com/474x/65/58/16/655816a097d496fcfc1d0ff551df1679.jpg',
  'https://i.pinimg.com/474x/73/95/de/7395dec8eb275253c2245947dda7d622.jpg',
];

function FirstAbout() {
  const swiperSlide = useSwiperSlide();
  return (
    <S.AboutSection>
      <S.TitleWrap>
        <S.Title>About us</S.Title>
        <S.SubTitle>광활한 우주를 유영하며</S.SubTitle>
      </S.TitleWrap>
      <S.ImageSwiperWrap>
        <S.ImageSwiper>
          <Image src="/images/aboutImage.webp" alt="행성" width={360} height={185} />
        </S.ImageSwiper>
        <S.ImageSwiper>
          <Image src="/images/aboutImage.webp" alt="행성" width={360} height={185} />
        </S.ImageSwiper>
      </S.ImageSwiperWrap>
      <S.ContentWrap>
        <S.ContentTitle>기획 전시</S.ContentTitle>
        <S.ContentDesc>
          다양한 작가들을 더 많은 공간에서 만날 수 있도록, 기획 전시를 진행합니다. 연남동 갤러리와 성수동 카페에서
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
