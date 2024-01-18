import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

const menuData = [
  {
    title: '전시 작품',
    link: '/products',
  },
  {
    title: '작가',
    link: '/authors',
  },
  {
    title: '로그인',
    link: '/login',
  }
]

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <S.HeaderWrap path={pathname}>
      <S.LogoWrap href={'/'}>
        <Image src="/images/main_logo.webp" alt="로고"fill  />
      </S.LogoWrap>
      <S.NavWrap>
        {
          menuData.map((item, index) => (
            <S.NavItem key={index} href={item.link} active={pathname.indexOf(item.link) !== -1?true:false}>
              {item.title}
            </S.NavItem>
          ))
        }
      </S.NavWrap>
    </S.HeaderWrap>
  );
}

export default Header;
