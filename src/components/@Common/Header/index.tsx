import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SideBar from './SideBar';
import { getCookie } from '@/util/cookie';

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  const pathname = router.pathname;
  const token = getCookie('accessToken');
  const onLinkedLogin = () => {
    if(!token){
      router.push('/login');
      return 
    }
    router.push('/mypage');
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
          <S.NavLogin onClick={onLinkedLogin} />
          <S.NavMenu onClick={onOpenMenu} />
        </S.NavWrap>
      </S.HeaderWrap>
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
