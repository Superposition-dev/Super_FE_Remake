import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import ExhibitionList from './ExhibitionList';
function Poster() {
  return (
    <S.PosterSection>
      <S.TitleWrap>
        <S.Title>Exhibition</S.Title>
        <S.SubTitle>우주 속 다채로운 예술과의 조우</S.SubTitle>
      </S.TitleWrap>
      <S.PosterInfoWrap>
        <S.PosterImage>
          <Image src="/images/poster1.webp" loading="lazy" alt="포스터" width={240} height={340} layout="responsive" />
        </S.PosterImage>
        <S.PosterTitleWrap>
          <S.PosterTitle>성수 POSITION</S.PosterTitle>
          <S.PosterSubWrap>
            <S.PosterSubTitle>슈퍼포지션의 두 번째 기획 전시</S.PosterSubTitle>
            <S.More>더보기</S.More>
          </S.PosterSubWrap>
        </S.PosterTitleWrap>
        <S.PosterInfo>
          {'연남에서의 첫 번째 만남. 이번엔 성수를 찾아갑니다!\n두 가지 버전으로 펼쳐질 성수전을 기대해주세요!'}
        </S.PosterInfo>
      </S.PosterInfoWrap>
      <ExhibitionList />
    </S.PosterSection>
  );
}

export default Poster;
