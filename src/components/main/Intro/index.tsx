import React from 'react';
import * as S from './styles';
import Image from 'next/image';
function Intro() {
  return (
    <S.SwiperSection>
      <S.PlanetWrap>
        <Image src="/images/planets.webp" alt="보라행성" width={0} height={0} layout="responsive" />
      </S.PlanetWrap>
      <S.LogoWrap>
        <Image src="/images/logo.svg" alt="로고" width={0} height={0} layout="responsive" />
      </S.LogoWrap>
      <S.SmallPlanetWrap>
        <Image src="/images/planet1.svg" alt="작은행성" width={0} height={0} layout="responsive" />
      </S.SmallPlanetWrap>
      <S.MediumPlanetWrap>
        <Image src="/images/planet2.svg" alt="중간행성" width={0} height={0} layout="responsive" />
      </S.MediumPlanetWrap>
      <S.CatWrap>
        <Image src="/images/cat.webp" alt="고양이" width={0} height={0} layout="responsive" />
      </S.CatWrap>
      <S.TextWrap>
        <S.Title>
          예술과 공간을 잇는
          <br />
          새로운 우주
        </S.Title>
        <S.Desc>슈퍼포지션은 예술과 공간이 함께 어우러져</S.Desc>
        <S.Desc>상생할 수 있는 세상을 꿈 꿉니다.</S.Desc>
      </S.TextWrap>
      <S.ArrowWrap>
        <Image src="/images/scroll_arrow.svg" alt="화살표" width={0} height={0} layout="responsive" />
      </S.ArrowWrap>
      <S.Gradient />
    </S.SwiperSection>
  );
}

export default Intro;
