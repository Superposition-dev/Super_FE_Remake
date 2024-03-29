import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { ValidateNickNameType } from '@/interface/common';
import { regexNickname, validateNickName } from '@/util/utils';
import { UserInfoProps } from '@/interface/user';
import { getCookie } from '@/util/cookie';
import { useRecoilValue } from 'recoil';
import { nicknameAtom } from '@/atoms/user';
import Portal from '@/components/@Common/Modal';
import ResponseModal from '@/components/@Common/Modal/Response';

function UserInfo(props: UserInfoProps) {
  const { userInfo, setUserInfo, data } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [validate, setValidate] = useState<ValidateNickNameType>(ValidateNickNameType.default);
  const nicknameIsVaild = useRecoilValue(nicknameAtom);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regexNickname(e.target.value)) {
      setError(true);
      setMessage('이모지는 닉네임에 포함될 수 없어요.');
      return;
    } else {
      setValidate(validateNickName(e.target.value, data?.nickname));
      setUserInfo((userInfo) => ({
        ...userInfo,
        nickname: e.target.value,
      }));
    }
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
      gender: e.target.value as 'M' | 'F',
    }));
  };

  return (
    <>
      <S.UserInfoCommonWrap>
        <S.Title>카카오 계정</S.Title>
        <S.EmailWrap>
          <S.KakaoWrap>
            <S.KakaoSymbol src="/images/kakaoSymbol.png" alt="카카오 이미지" />
          </S.KakaoWrap>
          <S.Email>{userInfo?.email}</S.Email>
        </S.EmailWrap>
      </S.UserInfoCommonWrap>
      <S.UserInfoCommonWrap>
        <S.Title>닉네임</S.Title>
        <S.Text
          type="text"
          value={userInfo?.nickname}
          placeholder=""
          onFocus={() => setIsEdit(true)}
          onBlur={() => (userInfo?.nickname ? setIsEdit(true) : setIsEdit(false))}
          onChange={(e) => onChangeText(e)}
          maxLength={30}
          bright={isEdit ? true : false}
          disabled={!nicknameIsVaild}
          validate={validate}
        />
        <S.Desc validate={validate}>
          {validate === ValidateNickNameType.default
            ? '닉네임은 2주마다 한 번씩 변경이 가능합니다.'
            : validate === ValidateNickNameType.error
            ? '1~104자 문자 조합으로 입력해 주세요.'
            : validate === ValidateNickNameType.duplicate
            ? '기존의 닉네임과 동일합니다.'
            : validate === ValidateNickNameType.success
            ? '사용 가능한 닉네임입니다!'
            : ''}
        </S.Desc>
      </S.UserInfoCommonWrap>
      <S.UserInfoBottomWrap>
        <S.UserInfoYearWrap>
          <S.Title>출생년도</S.Title>
          <S.BirthYearWrap>
            <S.BirthYear
              type="text"
              value={userInfo?.birthYear !== null ? userInfo?.birthYear : 'YYYY'}
              placeholder="YYYY"
              onChange={(e) => onChangeBirthYear(e)}
              maxLength={4}
              bright={data?.birthYear === '' && isEdit ? true : false}
              disabled={data?.birthYear ? true : false}
            />
            년생
          </S.BirthYearWrap>
        </S.UserInfoYearWrap>
        <S.UserInfoGenderWrap>
          <S.Title>성별</S.Title>
          <S.GendersWrap>
            {data?.gender ? (
              <S.DisabledGender>{data?.gender === 'F' ? '여성' : '남성'}</S.DisabledGender>
            ) : (
              <>
                <S.GenderWrap htmlFor="woman">
                  <S.RadioButton
                    type="radio"
                    name="gender"
                    id="woman"
                    value="F"
                    checked={userInfo?.gender === 'F' ? true : false}
                    disabled={data?.gender ? true : false}
                    onChange={(e) => {
                      onChangeGender(e);
                    }}
                  />
                  여성
                </S.GenderWrap>
                <S.GenderWrap htmlFor="man">
                  <S.RadioButton
                    type="radio"
                    name="gender"
                    id="man"
                    value="M"
                    checked={userInfo?.gender === 'M' ? true : false}
                    disabled={data?.gender ? true : false}
                    onChange={(e) => {
                      onChangeGender(e);
                    }}
                  />
                  남성
                </S.GenderWrap>
              </>
            )}
          </S.GendersWrap>
        </S.UserInfoGenderWrap>
      </S.UserInfoBottomWrap>
      <Portal>
        {error ? (
          <ResponseModal state={error} setState={setError} message={message} cancel="확인" handler={undefined} />
        ) : (
          <> </>
        )}
      </Portal>
    </>
  );
}

export default UserInfo;
