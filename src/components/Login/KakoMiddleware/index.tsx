import { instance } from '@/api/instance';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import { setCookie } from '@/util/cookie';
import Portal from '@/components/@Common/Modal';
import ResponseModal from '@/components/@Common/Modal/Response';
import { dateFormatter } from '@/util/utils';
const KakaoMiddleware = () => {
  const router = useRouter();
  const { code, error } = router.query;
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [login, setLogin] = useState<boolean>(true);

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try {
        const res = await instance.get(`/users/login/kakao?code=${code}`);
        setCookie('accessToken', res.data.accessToken, { path: '/' });
        router.push('/');

        if (res.data?.statusCodeValue === 303) {
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.body));
          router.push('/signup');
          return;
        }
      } catch (e: any) {
        if (e.response?.status === 303) {
          sessionStorage.setItem('userInfo', JSON.stringify(e.response.data));
          router.push('/signup');
          return;
        }
        if (e.response.status == 409) {
          const date = e.response.data;

          setLogin(false);
          setOpen(true);
          setMessage(
            `탈퇴 이후 3개월이 지나지 않아\n가입이 제한되었어요.\n\n${dateFormatter(date)}부터 다시 가입할 수 있어요.`,
          );
          return;
        }
        if(e.response.status === 500){
          setLogin(false);
          setOpen(true);
          setMessage('서버에 문제가 생겼어요.\n잠시 후 다시 시도해주세요.');
          return;
        }
      }
    },
    [router],
  );

  useEffect(() => {
    if (code) {
      loginHandler(code);
    }
  }, [loginHandler, code, error, router]);

  return (
    <S.LoadingContainer>
      <S.LoadingWrap>{login && '로그인 중...'}</S.LoadingWrap>
      <Portal>
        {open ? (
          <ResponseModal
            state={open}
            setState={setOpen}
            message={message}
            cancel="확인"
            handler={() => router.push('/')}
          />
        ) : (
          <> </>
        )}
      </Portal>
    </S.LoadingContainer>
  );
};

export default KakaoMiddleware;
