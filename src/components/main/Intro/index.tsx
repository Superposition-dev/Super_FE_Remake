import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import ScrollArrow from '@/components/@Common/ScrollArrow';
import { useVh } from '@/hook/useVh';
function Intro() {
  const vh = useVh();
  return (
    <S.IntroSection>
      <S.PlanetWrap vh={vh}>
        <Image src="/images/planets.webp" alt="보라행성" loading="eager" width={1237} height={1238} layout="responsive" priority />
      </S.PlanetWrap>
      <S.DarkPlanetWrap vh={vh}>
        <Image
          src="/images/desktop/dark_planet.webp"
          alt="보라행성"
          loading="eager"
          width={0}
          height={0}
          layout="responsive"
          priority
        />
      </S.DarkPlanetWrap>
      <S.LogoWrap>
        <Image src="/images/logo.svg" alt="로고" loading="lazy" width={0} height={0} layout="responsive" />
      </S.LogoWrap>
      <S.MainLogoWrap>
        <Image src="/images/mainLogo.webp" alt="슈퍼포지션" loading="lazy" width={804} height={305} layout="responsive" />
      </S.MainLogoWrap>
      <S.SmallPlanetWrap>
        <Image src="/images/planet1.svg" alt="작은행성" loading="lazy" width={0} height={0} layout="responsive" />
      </S.SmallPlanetWrap>
      <S.MediumPlanetWrap>
        <Image src="/images/planet2.webp" loading="lazy" alt="중간행성" width={0} height={0} layout="responsive" />
      </S.MediumPlanetWrap>
      <S.BottomWrap>
        <S.CatWrap>
          <Image src="/images/cat.webp" loading="lazy" alt="고양이" width={127} height={182} layout="responsive" />
        </S.CatWrap>
        <S.TextWrap>
          <S.TitleWrap>
            <S.Title>예술과 공간을 잇는 &nbsp;</S.Title>
            <S.Title>새로운 우주</S.Title>
          </S.TitleWrap>
          <S.Desc>슈퍼포지션은 예술과 공간이 함께 어우러져</S.Desc>
          <S.Desc>상생할 수 있는 세상을 꿈 꿉니다.</S.Desc>
        </S.TextWrap>
      </S.BottomWrap>
      <S.Gradient />
    </S.IntroSection>
  );
}

export default Intro;
