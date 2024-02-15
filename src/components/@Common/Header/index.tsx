import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SideBar from './SideBar';
import { getCookie } from '@/util/cookie';

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const token = getCookie('accessToken');

  const router = useRouter();
  const pathname = router.pathname;

  const onLinkedLogin = () => {
    router.push('/login');
  };

  const onOpenMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    token ? setIsLogin(true) : setIsLogin(false);
  }, [token]);

  return (
    <>
      <S.HeaderWrap path={pathname}>
        <S.LogoWrap href={'/'}>
          <Image src="/images/main_logo.webp" alt="로고" fill />
        </S.LogoWrap>
        <S.NavWrap>
          {isLogin ? <p>로그인완료</p> : <S.NavLogin onClick={onLinkedLogin} />}
          <S.NavMenu onClick={onOpenMenu} />
        </S.NavWrap>
      </S.HeaderWrap>
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
