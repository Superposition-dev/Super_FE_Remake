import React from 'react';
import * as S from './styles';
import { ProductType } from '@/interface/product';
import { useRouter } from 'next/router';
import { customNullImg } from '@/util/utils';
function Product({ data }: { data: ProductType }) {
  const { picture, tags, title, artist, productId } = data;
  const router = useRouter();

  const onLink = () => {
    router.push(`/products/${productId}`);
  };

  return (
    <S.ProductWrap onClick={onLink}>
      <S.ProductImageWrap>
        <S.ProductImage src={customNullImg(picture)} alt="이미지" loading="lazy" width={150} height={150} />
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
