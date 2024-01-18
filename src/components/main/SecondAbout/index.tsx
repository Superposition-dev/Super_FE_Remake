import React from 'react';
import * as S from './styles';
import Image from 'next/image';
function SecondAbout() {
  return (
    <S.SecondeAboutSection>
      <S.QrCodeWrap>
        <S.QrContentWrap>
          <h2>작품제목</h2>
          <h3>Art Piece Title</h3>
          <p>2023</p>
        </S.QrContentWrap>
        <S.QrIconWrap>
          <Image src={'/images/QRCode.svg'} loading="lazy" alt={'큐알코드'} fill={true} />
        </S.QrIconWrap>
      </S.QrCodeWrap>
      <S.ContentWrap>
        <S.ContentTitle>작품 QR 코드</S.ContentTitle>
        <S.ContentDesc>작품 정보를 제공하고 작가님과의 소통을 돕습니다.</S.ContentDesc>
        <S.ContentText>
          전시 작품 캡션의 QR코드를 제공합니다.
          <br />
          QR을 스캔하고 더 많은 이야기를 만나보세요!
        </S.ContentText>
      </S.ContentWrap>
      <S.DetailImageWrap>
        <Image src={'/images/detail.webp'} loading="lazy" alt={'작품상세이미지'} fill={true} />
      </S.DetailImageWrap>
      <S.QrContentWrap>
        <S.ContentTitle>작품 페이지</S.ContentTitle>
        <S.ContentDesc>작품 페이지에 들어오면 전시 중인 작품의 상세한 정보를 직접 확인할 수 있습니다. 작가 노트를 읽고, 맘에 드는 작품에는 좋아요를 눌러보세요!</S.ContentDesc>
      </S.QrContentWrap>
    </S.SecondeAboutSection>
  );
}

export default SecondAbout;
