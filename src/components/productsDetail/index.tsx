import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { ProductProps } from '@/interface/product';

function ProductDetail({data}:{data:ProductProps}) {
  const {picture,tags,title,artist,productNum,pictureInfo,price,description} = data;

  return (
    <S.DetailContainer>
      <S.ImageWrap>
        <S.ProductImage
          src={`https://kr.object.ncloudstorage.com/superposition-bucket/${picture}`}
          alt="이미지"
          width={360}
          height={594}
          layout="responsive"
        />
      </S.ImageWrap>
      <S.ProductInfoWrap>
        <S.Copy>
          <S.CopyText>무단 도용 및 재배포를 금지합니다.</S.CopyText>
          <S.CopyText>ⓒ 2023. {artist}. All rights reserved.</S.CopyText>
        </S.Copy>
        <S.FlexBox>
          <S.TitleWrap>
            <S.Title>{title}</S.Title>
            <S.Code>{productNum}</S.Code>
          </S.TitleWrap>
          <S.IsLike>
            <S.UnHeart />
          </S.IsLike>
        </S.FlexBox>
        <S.InfoWrap>
          <S.InfoType>{pictureInfo.type}, </S.InfoType>
          <S.InfoType>{pictureInfo.size}, </S.InfoType>
          <S.InfoType>{pictureInfo.year}</S.InfoType>
        </S.InfoWrap>
        <S.Tags>
          {
            tags.map((item:string,index:number) => (
              <S.Tag key={index}>#{item}</S.Tag>
            ))
          }
        </S.Tags>
        <S.AuthorWrap>
          <S.AuthorBox>
            <S.AuthorImageWrap>
              <Image
                src="https://i.pinimg.com/474x/75/dd/74/75dd7445d292b84013f1b790d2eaaf0b.jpg"
                alt="이미지"
                width={0}
                height={0}
                layout="responsive"
              />
            </S.AuthorImageWrap>
            <S.AuthorName>{artist}</S.AuthorName>
          </S.AuthorBox>
          <S.RightArrow />
        </S.AuthorWrap>
        <S.AuthorNote>
          <S.AuthorTitle>작가노트</S.AuthorTitle>
          <S.NoteText>{description}</S.NoteText>
        </S.AuthorNote>
      </S.ProductInfoWrap>
      <S.PriceBox>
        <S.Price>{price}원</S.Price>
        <S.BuyButton>구매하기</S.BuyButton>
      </S.PriceBox>
    </S.DetailContainer>
  );
}

export default ProductDetail;
