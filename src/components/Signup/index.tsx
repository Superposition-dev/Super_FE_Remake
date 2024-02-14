import React, { useEffect, useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';
import CommonUserImage from '../@Common/Image';
import UserInfo from './Info';
import { UserInfoType } from '@/interface/user';
import { ValidateNickNameType } from '@/interface/signup';
import { validateNickName } from '@/util/utils';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { postSignup } from '@/api/auth';
import { setCookie } from '@/util/cookie';

function SignupPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const router = useRouter();
  const kakaoData = typeof window !== 'undefined' ? sessionStorage.getItem('userInfo') : null;
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

  // 세션 스토리지에 저장된 카카오에서 받아온 데이터를 userInfo에 넣어주시면 됩니다.
  // 가입하기 클릭 시, 해당 데이터를 서버에 post 요청
  useEffect(() => {
    if (kakaoData) {
      setUserInfo(JSON.parse(kakaoData));
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <CommonWrapper>
      <S.SignupWrap>
        <S.SignupTopWrap>
          <CommonUserImage userInfo={userInfo} setUserInfo={setUserInfo} />
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
