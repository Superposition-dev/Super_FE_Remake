import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SideBar from './SideBar';

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = router.pathname;

  const onOpenMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <S.HeaderWrap path={pathname}>
        <S.LogoWrap href={'/'}>
          <Image src="/images/main_logo.webp" alt="로고" fill />
        </S.LogoWrap>
        <S.NavWrap>
          <Link href="/login">
            <S.NavLogin />
          </Link>
          <S.NavMenu onClick={onOpenMenu} />
        </S.NavWrap>
      </S.HeaderWrap>
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
