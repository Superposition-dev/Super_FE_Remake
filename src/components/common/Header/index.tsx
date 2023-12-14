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
]

function Header() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.HeaderWrap path={pathname}>
      <S.LogoWrap href={'/'}>
        <Image src="/images/main_logo.webp" alt="로고" width={0} height={0} layout="responsive" />
      </S.LogoWrap>
      <S.NavWrap>
        {
          menuData.map((item, index) => (
            <S.NavItem key={index} href={item.link} active={item.link === pathname?true:false}>
              {item.title}
            </S.NavItem>
          ))
        }
      </S.NavWrap>
    </S.HeaderWrap>
  );
}

export default Header;
