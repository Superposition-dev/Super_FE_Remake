import React from 'react';
import * as S from './styles';
import Image from 'next/image';
function Header() {
  return (
    <S.HeaderWrap>
      <S.LogoWrap>
        <Image src="/images/main_logo.webp" alt="로고" width={0} height={0} layout="responsive" />
      </S.LogoWrap>
      <S.NavWrap>
        <S.NavItem>전시 작품</S.NavItem>
        <S.NavItem>작가</S.NavItem>
      </S.NavWrap>
    </S.HeaderWrap>
  );
}

export default Header;
