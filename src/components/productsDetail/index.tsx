import React from 'react';
import * as S from './styles';
import Image from 'next/image';

const NOTE =
  'Nisl faucibus sollicitudin elementum commodo cursus ullamcorper senectus ut. Urna euismod feugiat convallis in mi neque. Nascetur etiam blandit sem amet. Odio viverra molestie ';

function ProductDetail() {
  return (
    <S.DetailContainer>
      <S.ImageWrap>
        <S.ProductImage
          src="https://i.pinimg.com/474x/c6/a3/f2/c6a3f2bbe8537fed334798f0c55876ec.jpg"
          alt="이미지"
          width={360}
          height={594}
          layout="responsive"
        />
      </S.ImageWrap>
      <S.ProductInfoWrap>
        <S.Copy>
          <S.CopyText>무단 도용 및 재배포를 금지합니다.</S.CopyText>
          <S.CopyText>ⓒ 2023. 김에지. All rights reserved.</S.CopyText>
        </S.Copy>
        <S.FlexBox>
          <S.TitleWrap>
            <S.Title>작품명</S.Title>
            <S.Code>작품 코드</S.Code>
          </S.TitleWrap>
          <S.IsLike>
            <S.UnHeart />
          </S.IsLike>
        </S.FlexBox>
        <S.InfoWrap>
          <S.InfoType>캔버스에 유화, </S.InfoType>
          <S.InfoType>73*73cm, </S.InfoType>
          <S.InfoType>2023</S.InfoType>
        </S.InfoWrap>
        <S.Tags>
          <S.Tag>#태그</S.Tag>
          <S.Tag>#태그</S.Tag>
          <S.Tag>#태그</S.Tag>
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
            <S.AuthorName>작가명</S.AuthorName>
          </S.AuthorBox>
          <S.RightArrow />
        </S.AuthorWrap>
        <S.AuthorNote>
          <S.AuthorTitle>작가노트</S.AuthorTitle>
          <S.NoteText>{NOTE}</S.NoteText>
        </S.AuthorNote>
      </S.ProductInfoWrap>
      <S.PriceBox>
        <S.Price>100,000원</S.Price>
        <S.BuyButton>구매하기</S.BuyButton>
      </S.PriceBox>
    </S.DetailContainer>
  );
}

export default ProductDetail;
