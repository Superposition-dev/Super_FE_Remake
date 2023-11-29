import React from 'react';
import * as S from './styles';
import { AuthorsData } from '@/interface/authors';
import Image from 'next/image';
// { data }: { data: AuthorsData }
// const { name, image } = data;
function Author() {
  return (
    <S.AuthorWrap>
      <S.AuthorImage>
        <Image
          src="https://i.pinimg.com/474x/73/95/de/7395dec8eb275253c2245947dda7d622.jpg"
          alt="작가이미지"
          width={46}
          height={46}
          layout="responsive"
        />
      </S.AuthorImage>
      <S.AuthorName>김민수</S.AuthorName>
    </S.AuthorWrap>
  );
}

export default Author;
