import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { SideBarProps } from '@/interface/header';
import usePreventScroll from '@/hook/usePreventScroll';
import { useRouter } from 'next/router';
import { getCookie } from '@/util/cookie';
import Portal from '../../Modal';
import InduceLoginModal from '../../Modal/InduceLogin';

const menuData = [
  // {
  //   title: 'About Us',
  //   url: '/introduction',
  // },
  {
    title: '전시',
    url: '/exhibition',
  },
  {
    title: '작가',
    url: '/authors',
  },
  // {
  //   title: '커뮤니티',
  //   url: '/community',
  // },
  {
    title: '마이페이지',
    url: '/mypage',
  },
];

function SideBar(props: SideBarProps) {
  const { open, setOpen } = props;
  const [notify, setNotify] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const token = getCookie('accessToken');
  const router = useRouter();

  const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
    const current = sideBarRef.current as HTMLDivElement;

    sideBarRef.current && !current.contains(e.target as Node) ? setOpen(false) : setOpen(true);
  };

  const onLinkMenu = (url: string) => {
    setOpen(false);
    if (url === '/mypage') {
      if (token) {
        router.push(url);
      } else {
        setNotify(true);
      }
    } else {
      router.push(url);
    }
  };

  usePreventScroll(open);

  // 사이드바 외 영역 클릭시 닫기
  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [sideBarRef]);

  return (
    <>
      <S.BackgroundWrap open={open} />
      <S.SideBarWrap open={open} ref={sideBarRef}>
        {menuData.map((item, index) => {
          return (
            <S.MenuWrap key={index} onClick={() => onLinkMenu(item.url)}>
              <S.ArrowImage />
              <S.MenuTitle>{item.title}</S.MenuTitle>
            </S.MenuWrap>
          );
        })}
      </S.SideBarWrap>
      <Portal>
        {notify ? (
          <InduceLoginModal desc="마이페이지는 로그인 후 이용할 수 있어요." state={notify} setState={setNotify} />
        ) : (
          <></>
        )}
      </Portal>
    </>
  );
}

export default SideBar;
