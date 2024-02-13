import Portal from '@/components/@Common/Modal';
import * as S from './styles';
import { useRouter } from 'next/router';
import RequestModal from '@/components/@Common/Modal/Request';
import { removeCookie } from '@/util/cookie';
import { useState } from 'react';

function List() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const ACTIVITY = [
    { title: '내가 쓴 글', icon: <S.Writing />, url: '/mypage/post' },
    { title: '내가 쓴 댓글', icon: <S.Message />, url: '/mypage/post' },
    { title: '좋아요한 글', icon: <S.Heart />, url: '/mypage/post' },
  ];

  const HELP = [
    { title: '문의하기', url: '/' },
    { title: '이용약관', url: '/' },
    { title: '개인정보 처리 방침', url: '/' },
    { title: '로그아웃', url: '' },
  ];

  const onLink = (url: string) => {
    router.push(url);
  };

  return (
    <S.ListWrap>
      <S.List>
        <S.Title>나의 활동</S.Title>
        <S.InnerList>
          {ACTIVITY.map((item, index) => {
            return (
              <S.Item key={index} onClick={() => onLink(item.url)}>
                {item.icon}
                {item.title}
              </S.Item>
            );
          })}
        </S.InnerList>
      </S.List>
      <S.List>
        <S.Title>이용 관련</S.Title>
        <S.InnerList>
          {HELP.map((item, index) => {
            return (
              <S.Item key={index} onClick={() => (item.title !== '로그아웃' ? onLink(item.url) : setOpen(true))}>
                {item.title}
              </S.Item>
            );
          })}
        </S.InnerList>
      </S.List>
      <Portal>
        {open ? (
          <RequestModal
            message="로그아웃 하시겠어요?"
            state={open}
            setState={setOpen}
            cancel="취소"
            accept="로그아웃"
            handler={() => {
              onLink('/');
              removeCookie('accessToken', { path: '/' });
            }}
          />
        ) : (
          <></>
        )}
      </Portal>
    </S.ListWrap>
  );
}

export default List;
