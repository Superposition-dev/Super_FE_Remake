import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { AuthorsProps } from '@/interface/authors';
import { useRouter } from 'next/router';

function Author({ data }: { data: AuthorsProps }) {
  const { name, profile, instagramId } = data;
  const router = useRouter();
  const onLinked = () => {
    router.push(`/authors/${instagramId}`);
  };
  return (
    <S.AuthorWrap onClick={onLinked}>
      <S.AuthorImage>
        <Image
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
          alt="작가이미지"
          loading="lazy"
          placeholder="blur"
          blurDataURL={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
          width={46}
          height={46}
        />
      </S.AuthorImage>
      <S.AuthorName>{name}</S.AuthorName>
    </S.AuthorWrap>
  );
}

export default React.memo(Author);
