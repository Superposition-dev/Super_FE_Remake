import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { InduceLoginModalProps } from '@/interface/modal';
import { useRouter } from 'next/router';
import usePreventScroll from '@/hook/usePreventScroll';

function InduceLoginModal(props: InduceLoginModalProps) {
  const { desc, state, setState } = props;
  const router = useRouter();

  const onClose = () => {
    setState(false);
  };

  const onLinkedLogin = () => {
    router.push('/login');
    setState(false);
  };

  usePreventScroll(state);

  return (
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.ModalInnerWrap>
          <S.ModalTitleWrap>
            <S.ModalTitle>로그인 하시겠어요?</S.ModalTitle>
            <S.ModalSubTitle>{desc}</S.ModalSubTitle>
          </S.ModalTitleWrap>
          <S.ModalButtonWrap>
            <S.KaKaoButton onClick={onLinkedLogin}>
              <Image src="/images/kakaoSymbol.png" alt="카카오로 시작하기" width="24" height="24" />
              <S.KaKaoText>카카오로 시작하기</S.KaKaoText>
            </S.KaKaoButton>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          </S.ModalButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default InduceLoginModal;
