import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { InduceLoginModalProps } from '@/interface/modal';
import { useRouter } from 'next/router';

function InduceLoginModal(props: InduceLoginModalProps) {
  const { title, state, setState } = props;
  const router = useRouter();

  const onClose = () => {
    setState(false);
  };

  const onLinkedLogin = () => {
    router.push('/login');
  };

  return (
    // <S.ModalWrap>
    //   <S.Background />
    //   <S.Modal>
    //     <S.CloseButton onClick={onClose} />
    //     <S.ModalInnerWrap>
    //       <S.ModalTitle>{`${title}는 로그인 이후 이용할 수 있어요.\n로그인하고 나만의 취향을 모아보세요!`}</S.ModalTitle>
    //       <S.ModalButtonWrap>
    //         <S.KaKaoButton onClick={onLinkedLogin}>
    //           <Image src="/images/kakaoSymbol.png" alt="카카오로 시작하기" width="28" height="28" />
    //           <S.KaKaoText>카카오로 시작하기</S.KaKaoText>
    //         </S.KaKaoButton>
    //         <S.CancelText onClick={onClose}>다음에 할래요.</S.CancelText>
    //       </S.ModalButtonWrap>
    //     </S.ModalInnerWrap>
    //   </S.Modal>
    // </S.ModalWrap>
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.ModalInnerWrap>
          <S.ModalTitleWrap>
            <S.ModalTitle>로그인 하시겠어요?</S.ModalTitle>
            <S.ModalSubTitle>회원이 되면 내 취향을 모아볼 수 있어요.</S.ModalSubTitle>
          </S.ModalTitleWrap>
          <S.ModalButtonWrap>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.KaKaoButton onClick={onLinkedLogin}>
              <Image src="/images/kakaoSymbol.png" alt="카카오로 시작하기" width="24" height="24" />
              <S.KaKaoText>시작하기</S.KaKaoText>
            </S.KaKaoButton>
          </S.ModalButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default InduceLoginModal;
