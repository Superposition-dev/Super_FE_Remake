import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import ExhibitionList from './ExhibitionList';
import { useRouter } from 'next/router';
function Poster() {

  const router = useRouter();
  const onLinked = () => {
    router.push(`/exhibition`);
  }

  return (
    <S.PosterSection>
      <S.TitleWrap>
        <S.Title>Exhibition</S.Title>
        <S.SubTitle>우주 속 다채로운 예술과의 조우</S.SubTitle>
      </S.TitleWrap>
    <S.ContentWrap>
      <S.PosterInfoWrap onClick={onLinked}>
        <S.PosterImage>
          <Image src="/images/poster5.webp" loading="lazy" alt="포스터" fill />
        </S.PosterImage>
        <S.TextWrap>
        <S.PosterTitleWrap>
          <S.PosterTitle>지하의 행성들</S.PosterTitle>
          <S.PosterSubWrap>
            <S.PosterSubTitle>슈퍼포지션 성수 기획전</S.PosterSubTitle>
            <S.More>{`더보기 >`}</S.More>
          </S.PosterSubWrap>
        </S.PosterTitleWrap>
        <S.PosterInfo>
          {'성수동 어느 지하에는 빛나는 행성들이 살고 있습니다. 문을 열면 펼쳐지는 새로운 차원으로 여러분을 초대합니다.'}
        </S.PosterInfo>
        </S.TextWrap>
      </S.PosterInfoWrap>
      <ExhibitionList />
    </S.ContentWrap>
    </S.PosterSection>
  );
}

export default Poster;
