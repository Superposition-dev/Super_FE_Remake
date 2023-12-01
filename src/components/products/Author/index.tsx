import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { AuthorsProps } from '@/interface/authors';

function Author({ data }: { data: AuthorsProps }) {
  const { name, profile } = data;
  return (
    <S.AuthorWrap>
      <S.AuthorImage>
        <Image
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
          alt="작가이미지"
          width={46}
          height={46}
          layout="responsive"
        />
      </S.AuthorImage>
      <S.AuthorName>{name}</S.AuthorName>
    </S.AuthorWrap>
  );
}

export default Author;
