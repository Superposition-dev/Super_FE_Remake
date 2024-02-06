import React, { useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SideBar from './SideBar';
import { useQuery } from 'react-query';
import { getMe } from '@/api/auth';
import Portal from '../Modal';
import InduceLoginModal from '../Modal/InduceLogin';

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const router = useRouter();
  const pathname = router.pathname;
  const { data } = useQuery('user', getMe);
  const onLinkedLogin = () => {
    router.push('/login');
  };

  const onOpenMenu = () => {
    setOpen(true);
  };

  const onSendLike = () => {
    setLike(true);
  };

  return (
    <>
      <S.HeaderWrap path={pathname}>
        <S.LogoWrap href={'/'}>
          <Image src="/images/main_logo.webp" alt="로고" fill />
        </S.LogoWrap>
        <S.NavWrap>
          <div onClick={onSendLike}>좋아요</div>
          {data ? <p>로그인완료</p> : <S.NavLogin onClick={onLinkedLogin} />}
          <S.NavMenu onClick={onOpenMenu} />
        </S.NavWrap>
      </S.HeaderWrap>
      <SideBar open={open} setOpen={setOpen} />
      <Portal>
        {like ? (
          <InduceLoginModal desc="회원이 되면 내 취향을 모아볼 수 있어요." state={like} setState={setLike} />
        ) : (
          <></>
        )}
      </Portal>
    </>
  );
}

export default Header;
