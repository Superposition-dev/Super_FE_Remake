import React from 'react';
import * as S from './styles';
import Image from 'next/image';

function Floating() {
  return (
    <S.FloatingWrap>
      {/* <S.FloatingImage /> */}
      <S.FloatingImageWrap>
        <Image src="/images/floatingImage.webp" alt="작가 신청" width="24" height="26" />
      </S.FloatingImageWrap>
      <S.FloatingTitle>작가 신청</S.FloatingTitle>
    </S.FloatingWrap>
  );
}

export default Floating;
