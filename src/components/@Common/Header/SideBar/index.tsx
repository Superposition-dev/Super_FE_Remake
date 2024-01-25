import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import { SideBarProps } from '@/interface/header';

const menuData = [
  {
    title: 'About Us',
    link: '/introduction',
  },
  {
    title: '전시',
    link: '/exhibition',
  },
  {
    title: '작가',
    link: '/authors',
  },
  {
    title: '커뮤니티',
    link: '/community',
  },
  {
    title: '마이페이지',
    link: '/mypage',
  },
];

function SideBar(props: SideBarProps) {
  const { open, setOpen } = props;
  const sideBarRef = useRef<HTMLDivElement>(null);

  const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
    const current = sideBarRef.current as HTMLDivElement;

    sideBarRef.current && !current.contains(e.target as Node) ? setOpen(false) : setOpen(true);
  };

  const onLinkMenu = () => {
    setOpen(false);
  };

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
            <S.MenuWrap key={index} href={item.link} onClick={onLinkMenu}>
              <S.ArrowImage />
              <S.MenuTitle>{item.title}</S.MenuTitle>
            </S.MenuWrap>
          );
        })}
      </S.SideBarWrap>
    </>
  );
}

export default SideBar;
