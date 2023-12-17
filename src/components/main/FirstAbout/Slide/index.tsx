import React from 'react';
import * as S from './styles';
import Image from 'next/image';

type SlideProps = {
  images: string[];
  state: boolean;
};

function Slide({ images, state }: SlideProps) {
  return (
    <S.SlideWrap>
      <S.SlideItems
        animate={{ x: state ? ['-50%', '0%'] : 'none' }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: 'linear',
        }}
      >
        {images.map((image, index) => (
          <S.SlideItem key={index}>
            <Image src={image} alt="슬라이드 이미지" loading="eager" width={100} height={84} />
          </S.SlideItem>
        ))}
        {images.map((image, index) => (
          <S.SlideItem key={index}>
            <Image src={image} alt="슬라이드 이미지" loading="eager" width={100} height={84} />
          </S.SlideItem>
        ))}
      </S.SlideItems>
    </S.SlideWrap>
  );
}

export default Slide;
