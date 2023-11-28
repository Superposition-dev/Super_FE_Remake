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
          <Image src={'/images/QRCode.svg'} alt={'큐알코드'} fill={true} />
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
        <Image src={'/images/detail.webp'} alt={'작품상세이미지'} fill={true} />
      </S.DetailImageWrap>
      <S.QrContentWrap>
        <S.ContentTitle>작품 페이지</S.ContentTitle>
        <S.ContentDesc>작품 페이지에 들어오면 전시 중인 작품의 상세한 정보를 직접 확인할 수 있습니다.</S.ContentDesc>
        <S.TextWrap>
          <S.TextStrong>작품이 인상 깊으셨나요?</S.TextStrong>
          <S.Text>{`작품의 '좋아요' 버튼을 눌러주세요! 여러분의 소중한 마음이 작가님에게 전달됩니다.`}</S.Text>
        </S.TextWrap>
        <S.TextWrap>
          <S.TextStrong>스토리가 궁금하셨나요?</S.TextStrong>
          <S.Text>작가님이 직접 작성한 노트와 함께 작품을 보다 깊이 감상하실 수 있습니다.</S.Text>
        </S.TextWrap>
      </S.QrContentWrap>
    </S.SecondeAboutSection>
  );
}

export default SecondAbout;
