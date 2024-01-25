import React, { useState } from 'react';
import * as S from './styles';
import { UserInfoProps, ValidateNickNameType } from '@/interface/signup';
import { validateNickName } from '@/util/utils';

function UserInfo(props: UserInfoProps) {
  const { userInfo, setUserInfo } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [validate, setValidate] = useState<ValidateNickNameType>(ValidateNickNameType.default);

  const onEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      nickName: e.target.value,
    }));

    setValidate(validateNickName(e.target.value));
  };

  return (
    <>
      <S.UserInfoTopWrap>
        <S.Title>닉네임</S.Title>
        <S.Text
          isEdit={isEdit ? true : false}
          value={userInfo?.nickName}
          placeholder=""
          onFocus={() => setIsEdit(true)}
          onBlur={() => (userInfo?.nickName ? setIsEdit(true) : setIsEdit(false))}
          onChange={(e) => onEditText(e)}
        />
        <S.Desc validate={validate}>
          {validate === ValidateNickNameType.default
            ? '(8~16자)'
            : validate === ValidateNickNameType.error
            ? '8~16자 조합으로 입력해 주세요.'
            : '사용 가능한 닉네임입니다!'}
        </S.Desc>
      </S.UserInfoTopWrap>
    </>
  );
}

export default UserInfo;
