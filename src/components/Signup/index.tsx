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

function SignupPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [originInfo, setOriginInfo] = useState<UserInfoType>();
  const kakaoData = typeof window !== 'undefined' ? sessionStorage.getItem('userInfo') : null;
  const router = useRouter();

  const { mutate, isLoading } = useMutation('userInfo', () => postSignup(userInfo as UserInfoType), {
    onSuccess: (data) => {
      sessionStorage.removeItem('userInfo');
      setCookie('accessToken', data.accessToken, { path: '/' });
      router.push('/');
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
          {isLoading ? '가입중...' : '가입하기'}
        </S.SignupButton>
      </S.SignupWrap>
    </CommonWrapper>
  );
}

export default SignupPage;
