import React from 'react';
import * as S from './styles';
import { ResponseModalProps } from '@/interface/modal';
import usePreventScroll from '@/hook/usePreventScroll';

function ResponseModal(props: ResponseModalProps) {
  const { state, setState, message, cancel, handler } = props;

  const onClose = () => {
    setState(false);
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
          </S.ModalButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default ResponseModal;
