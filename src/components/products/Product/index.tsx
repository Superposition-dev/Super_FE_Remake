import React from 'react';
import * as S from './styles';
function Product({ img }: { img: string }) {
  return (
    <S.ProductWrap>
      <S.ProductImageWrap>
        <S.ProductImage src={img} alt="이미지" width={150} height={150} />
      </S.ProductImageWrap>
      <S.ProductInfoWrap>
        <S.Tags>
          <S.Tag>#태그</S.Tag>
          <S.Tag>#태그</S.Tag>
          <S.Tag>#태그</S.Tag>
        </S.Tags>
        <S.ProductTitle>작품명</S.ProductTitle>
        <S.ProductAuthor>작가명</S.ProductAuthor>
      </S.ProductInfoWrap>
    </S.ProductWrap>
  );
}

export default Product;
