import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { InduceModalProps } from '@/interface/modal';
import { useRouter } from 'next/router';

function InduceModal(props: InduceModalProps) {
  const { title, state, setState } = props;
  const router = useRouter();

  const onClose = () => {
    setState(false);
  };

  const onLinkedLogin = () => {
    router.push('/login');
  };

  return (
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.CloseButton onClick={onClose} />
        <S.ModalInnerWrap>
          <S.ModalTitle>{`${title}는 로그인 이후 이용할 수 있어요.\n로그인하고 나만의 취향을 모아보세요!`}</S.ModalTitle>
          <S.ModalButtonWrap>
            <S.KaKaoButton onClick={onLinkedLogin}>
              <Image src="/images/kakaoSymbol.png" alt="카카오로 시작하기" width="28" height="28" />
              <S.KaKaoText>카카오로 시작하기</S.KaKaoText>
            </S.KaKaoButton>
            <S.CancelText onClick={onClose}>다음에 할래요.</S.CancelText>
          </S.ModalButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default InduceModal;
