import React, { useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';
import UserImage from './Image';
import UserInfo from './Info';
import { UserInfoType, ValidateNickNameType } from '@/interface/signup';
import { validateNickName } from '@/util/utils';

function SignupPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  // 세션 스토리지에 저장된 카카오에서 받아온 데이터를 userInfo에 넣어주시면 됩니다.
  // 가입하기 클릭 시, 해당 데이터를 서버에 post 요청

  return (
    <CommonWrapper>
      <S.SignupWrap>
        <S.SignupTopWrap>
          <UserImage userInfo={userInfo} setUserInfo={setUserInfo} />
        </S.SignupTopWrap>
        <S.SignupBottomWrap>
          <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        </S.SignupBottomWrap>
        <S.SignupButton
          active={
            userInfo?.nickName && validateNickName(userInfo.nickName) === ValidateNickNameType.success ? true : false
          }
        >
          가입하기
        </S.SignupButton>
      </S.SignupWrap>
    </CommonWrapper>
  );
}

export default SignupPage;
