import React from 'react';
import * as S from './styles';
function Author() {
  return (
    <S.AuthorWrap>
      <S.AuthorImageWrap>
        <S.AuthorImage
          src={'https://i.pinimg.com/474x/75/dd/74/75dd7445d292b84013f1b790d2eaaf0b.jpg'}
          alt="작가"
          fill
        />
        <S.Border />
      </S.AuthorImageWrap>
      <S.AuthorName>김민수</S.AuthorName>
      <S.AuthorInfo>김민수는 1990년 1월 1일에 태어났습니다.</S.AuthorInfo>
      <S.NowBox>NOW</S.NowBox>
    </S.AuthorWrap>
  );
}

export default Author;
