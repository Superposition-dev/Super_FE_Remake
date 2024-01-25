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

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      year: e.target.value,
    }));
  };

  const onChangeSex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      sex: e.target.value,
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
          <S.YearWrap>
            <S.Year
              type="text"
              value={userInfo?.year}
              placeholder="YYYY"
              onChange={(e) => onChangeYear(e)}
              maxLength={4}
            />
            년생
          </S.YearWrap>
        </S.UserInfoYearWrap>
        <S.UserInfoSexWrap>
          <S.Title>성별</S.Title>
          <S.SexsWrap>
            <S.SexWrap htmlFor="woman">
              <S.HiddenRadioButton
                type="radio"
                name="sex"
                id="woman"
                value="woman"
                onChange={(e) => {
                  onChangeSex(e);
                }}
              />
              {/* <S.RadioButton /> */}
              여성
            </S.SexWrap>
            <S.SexWrap htmlFor="man">
              <S.HiddenRadioButton
                type="radio"
                name="sex"
                id="man"
                value="man"
                onChange={(e) => {
                  onChangeSex(e);
                }}
              />
              남성
              {/* <S.RadioButton /> */}
            </S.SexWrap>
          </S.SexsWrap>
        </S.UserInfoSexWrap>
      </S.UserInfoBottomWrap>
    </>
  );
}

export default UserInfo;
