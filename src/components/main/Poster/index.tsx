import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import ExhibitionList from './ExhibitionList';
import { useRouter } from 'next/router';
function Poster() {

  const router = useRouter();
  const onLinked = () => {
    router.push(`/products`);
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
          <Image src="/images/poster4.webp" loading="lazy" alt="포스터" fill />
        </S.PosterImage>
        <S.TextWrap>
        <S.PosterTitleWrap>
          <S.PosterTitle>여기는 따뜻해</S.PosterTitle>
          <S.PosterSubWrap>
            <S.PosterSubTitle>성수지앵XSuperposition 겨울 전시</S.PosterSubTitle>
            <S.More>{`더보기 >`}</S.More>
          </S.PosterSubWrap>
        </S.PosterTitleWrap>
        <S.PosterInfo>
          {'연남에서의 첫 번째 만남. 이번엔 성수를 찾아갑니다! 두 가지 버전으로 펼쳐질 성수전을 기대해주세요!'}
        </S.PosterInfo>
        </S.TextWrap>
      </S.PosterInfoWrap>
      <ExhibitionList />
    </S.ContentWrap>
    </S.PosterSection>
  );
}

export default Poster;
