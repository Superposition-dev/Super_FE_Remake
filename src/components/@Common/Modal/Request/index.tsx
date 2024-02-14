import React from 'react';
import * as S from './styles';
import { RequestModalProps } from '@/interface/modal';
import { useRouter } from 'next/router';
import usePreventScroll from '@/hook/usePreventScroll';

function RequestModal(props: RequestModalProps) {
  const { state, setState, message, cancel, accept, handler } = props;
  const router = useRouter();

  const onClose = () => {
    setState(false);
  };

  const onHandler = () => {
    handler && handler();
  };

  usePreventScroll(state);

  return (
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.ModalInnerWrap>
          <S.Title>{message}</S.Title>
          <S.ModalButtonWrap>
            <S.CancelButton onClick={onClose}>{cancel}</S.CancelButton>
            <S.HandlerButton onClick={onHandler}>{accept}</S.HandlerButton>
          </S.ModalButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default RequestModal;
