import React from 'react';
import * as S from './styles';
import { MainProduct } from '@/interface/product';
import { useRouter } from 'next/router';
function Product({ data }: { data: MainProduct }) {
  const { picture, tags, title, artist,productId } = data;
  const router = useRouter();

  const onLink = () => {
    router.push(`/products/${productId}`);
  }

  return (
    <S.ProductWrap onClick={onLink}>
      <S.ProductImageWrap>
        <S.ProductImage
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${picture}`}
          alt="이미지"
          width={150}
          height={150}
        />
      </S.ProductImageWrap>
      <S.ProductInfoWrap>
        <S.Tags>
          {tags.map((item: string, index: number) => (
            <S.Tag key={index}>#{item}</S.Tag>
          ))}
        </S.Tags>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductAuthor>{artist}</S.ProductAuthor>
      </S.ProductInfoWrap>
    </S.ProductWrap>
  );
}

export default Product;
