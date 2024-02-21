import React, { useEffect, useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';
import CommonUserImage from '../@Common/Image';
import UserInfo from './Info';
import { UserInfoType } from '@/interface/user';
import { ValidateNickNameType } from '@/interface/common';
import { validateNickName } from '@/util/utils';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { postSignup } from '@/api/user';
import { setCookie } from '@/util/cookie';
import Portal from '../@Common/Modal';
import ResponseModal from '../@Common/Modal/Response';

function SignupPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [originInfo, setOriginInfo] = useState<UserInfoType>();
  const [signupState, setSignupState] = useState<string>('가입하기');
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const kakaoData = typeof window !== 'undefined' ? sessionStorage.getItem('userInfo') : null;

  const { mutate, isLoading } = useMutation('userInfo', () => postSignup(userInfo as UserInfoType), {
    onSuccess: (data) => {
      sessionStorage.removeItem('userInfo');
      setCookie('accessToken', data.accessToken,{path: '/'});
      setSignupState('가입 완료');
      setOpen(true);
      setMessage('회원가입이 완료 되었습니다!');
    },
  });

  const onSignup = () => {
    mutate();
  };

  useEffect(() => {
    if (kakaoData) {
      setOriginInfo(JSON.parse(kakaoData));
      setUserInfo(JSON.parse(kakaoData));
    }
  }, []);

  return (
    <CommonWrapper>
      <S.SignupWrap>
        <S.SignupTopWrap>
          <CommonUserImage userInfo={userInfo} setUserInfo={setUserInfo} data={originInfo} />
        </S.SignupTopWrap>
        <S.SignupBottomWrap>
          <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        </S.SignupBottomWrap>
        <S.SignupButton
          disabled={
            (userInfo?.nickname && validateNickName(userInfo.nickname) === ValidateNickNameType.success) || isLoading
              ? false
              : true
          }
          onClick={onSignup}
        >
          {isLoading ? '가입 중...' : signupState}
        </S.SignupButton>
      </S.SignupWrap>
      {
        <Portal>
          {open ? (
            <ResponseModal
              state={open}
              setState={setOpen}
              message={message}
              cancel="이용하러 가기"
              handler={() => router.push('/')}
            />
          ) : (
            <></>
          )}
        </Portal>
      }
    </CommonWrapper>
  );
}

export default SignupPage;
