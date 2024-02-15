import React, { useState } from 'react';
import * as S from './styles';
import { ResignModalProps } from '@/interface/modal';
import { useRouter } from 'next/router';
import { ValidateEmailType } from '@/interface/common';
import { validateEmail } from '@/util/utils';
import usePreventScroll from '@/hook/usePreventScroll';

function ResignModal(props: ResignModalProps) {
  const { state, setState, data, handler } = props;
  const [email, setEmail] = useState<string>('');
  const [validate, setValidate] = useState<ValidateEmailType>(ValidateEmailType.default);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const router = useRouter();

  const DESC = [
    '회원 탈퇴 시, 기존 정보의 복구가 불가능합니다.',
    '이메일의 경우 커뮤니티 부정이용 방지를 위해 3개월 간 보관되며, 동일한 이메일로 재가입시 가입이 제한될 수 있습니다.',
    '탈퇴 시, 위 내용에 동의한 것으로 간주됩니다.',
  ];

  const onClose = () => {
    setState(false);
  };

  const onHandler = () => {
    handler && handler();
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidate(validateEmail(e.target.value, data?.email));
  };

  usePreventScroll(state);

  return (
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.ModalInnerWrap>
          <S.TitleWrap>
            <S.Title>회원 탈퇴</S.Title>
            <S.Close onClick={onClose} />
          </S.TitleWrap>
          <S.DescWrap>
            {DESC.map((desc, index) => {
              return (
                <S.DescInnerWrap key={index}>
                  <S.Dot>•</S.Dot>
                  <S.Desc>{desc}</S.Desc>
                </S.DescInnerWrap>
              );
            })}
          </S.DescWrap>
          <S.EmailWrap>
            <S.Title>이메일 확인</S.Title>
            <S.Email
              type="text"
              value={email}
              placeholder="가입한 계정의 이메일을 입력해 주세요."
              onFocus={() => setIsEdit(true)}
              onBlur={() => (email ? setIsEdit(true) : setIsEdit(false))}
              onChange={(e) => onChangeEmail(e)}
              maxLength={30}
              bright={isEdit || validate === ValidateEmailType.success ? true : false}
              validate={validate}
            />
            <S.Validate validate={validate}>
              {validate === ValidateEmailType.default
                ? ''
                : validate === ValidateEmailType.error
                ? '이메일이 일치하지 않습니다.'
                : validate === ValidateEmailType.success
                ? '메일이 확인되었습니다.'
                : ''}
            </S.Validate>
          </S.EmailWrap>
          <S.ResignButton onClick={onHandler} disabled={validate === ValidateEmailType.success ? false : true}>
            탈퇴하기
          </S.ResignButton>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default ResignModal;
