import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { AuthorType, AuthorsProps } from '@/interface/authors';
import { useRouter } from 'next/router';
import { customNullImg } from '@/util/utils';

function Author({ data }: { data: AuthorType }) {
  const { name, profile, instagramId } = data;
  const router = useRouter();

  const onLinked = () => {
    router.push(`/authors/${instagramId}`);
  };

  return (
    <S.AuthorWrap onClick={onLinked}>
      <S.AuthorImage>
        <Image src={customNullImg('')} alt="작가 이미지" loading="lazy" width={46} height={46} />
      </S.AuthorImage>
      <S.AuthorName>{name}</S.AuthorName>
    </S.AuthorWrap>
  );
}

export default React.memo(Author);
