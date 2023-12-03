import React from 'react';
import * as S from './styles';
import { AuthorsProps } from '@/interface/authors';


function Author({data}:{data:AuthorsProps}) {
  const {name,profile,introduce,display} = data;


  return (
    <S.AuthorWrap>
      <S.AuthorImageWrap>
        <S.AuthorImage
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
          alt="작가"
          fill
        />
        <S.Border />
      </S.AuthorImageWrap>
      <S.AuthorName>{name}</S.AuthorName>
      <S.AuthorInfo>{introduce}</S.AuthorInfo>
      {
        display && <S.NowBox>NOW</S.NowBox>
      }
    </S.AuthorWrap>
  );
}

export default Author;
