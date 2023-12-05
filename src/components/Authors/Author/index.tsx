import React from 'react';
import * as S from './styles';
import { AuthorsProps } from '@/interface/authors';
import { useRouter } from 'next/router';

function Author({ data }: { data: AuthorsProps }) {
  const { name, profile, introduce, display, instagramId } = data;
  const router = useRouter();

  const onLinked = () => {
    router.push(`/authors/${instagramId}`);
  };
  return (
    <S.AuthorWrap onClick={onLinked}>
      <S.AuthorImageWrap>
        <S.AuthorImage
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
          alt="작가"
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
        />
        <S.Border />
      </S.AuthorImageWrap>
      <S.AuthorName>{name}</S.AuthorName>
      <S.AuthorInfo>{introduce}</S.AuthorInfo>
      {display && <S.NowBox>NOW</S.NowBox>}
    </S.AuthorWrap>
  );
}

export default React.memo(Author);
