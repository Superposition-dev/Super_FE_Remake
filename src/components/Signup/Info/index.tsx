import React, { useState } from 'react';
import * as S from './styles';
import { UserInfoProps, ValidateNickNameType } from '@/interface/signup';
import { validateNickName } from '@/util/utils';

function UserInfo(props: UserInfoProps) {
  const { userInfo, setUserInfo } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [validate, setValidate] = useState<ValidateNickNameType>(ValidateNickNameType.default);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      nickName: e.target.value,
    }));

    setValidate(validateNickName(e.target.value));
  };

  const onChangeBirthYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      birthYear: e.target.value,
    }));
  };

  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      gender: e.target.value,
    }));
  };

  return (
    <>
      <S.UserInfoTopWrap>
        <S.Title>닉네임</S.Title>
        <S.Text
          type="text"
          value={userInfo?.nickName}
          placeholder=""
          onFocus={() => setIsEdit(true)}
          onBlur={() => (userInfo?.nickName ? setIsEdit(true) : setIsEdit(false))}
          onChange={(e) => onChangeText(e)}
          maxLength={30}
          isEdit={isEdit ? true : false}
          validate={validate}
        />
        <S.Desc validate={validate}>
          {validate === ValidateNickNameType.default
            ? '(8~16자)'
            : validate === ValidateNickNameType.error
            ? '8~16자 조합으로 입력해 주세요.'
            : validate === ValidateNickNameType.success
            ? '사용 가능한 닉네임입니다!'
            : ''}
        </S.Desc>
      </S.UserInfoTopWrap>
      <S.UserInfoBottomWrap>
        <S.UserInfoYearWrap>
          <S.Title>출생년도</S.Title>
          <S.BirthYearWrap>
            <S.BirthYear
              type="text"
              value={userInfo?.birthYear}
              placeholder="YYYY"
              onChange={(e) => onChangeBirthYear(e)}
              maxLength={4}
            />
            년생
          </S.BirthYearWrap>
        </S.UserInfoYearWrap>
        <S.UserInfoGenderWrap>
          <S.Title>성별</S.Title>
          <S.GendersWrap>
            <S.GenderWrap htmlFor="woman">
              <S.RadioButton
                type="radio"
                name="sex"
                id="woman"
                value="woman"
                onChange={(e) => {
                  onChangeGender(e);
                }}
              />
              여성
            </S.GenderWrap>
            <S.GenderWrap htmlFor="man">
              <S.RadioButton
                type="radio"
                name="sex"
                id="man"
                value="man"
                onChange={(e) => {
                  onChangeGender(e);
                }}
              />
              남성
            </S.GenderWrap>
          </S.GendersWrap>
        </S.UserInfoGenderWrap>
      </S.UserInfoBottomWrap>
    </>
  );
}

export default UserInfo;
