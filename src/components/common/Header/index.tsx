import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
function Header() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.HeaderWrap path={pathname}>
      <S.LogoWrap href={'/'}>
        <Image src="/images/main_logo.webp" alt="로고" width={0} height={0} layout="responsive" />
      </S.LogoWrap>
      <S.NavWrap>
        <S.NavItem href={'/products'}>전시 작품</S.NavItem>
        <S.NavItem href={'/authors'}>작가</S.NavItem>
      </S.NavWrap>
    </S.HeaderWrap>
  );
}

export default Header;
