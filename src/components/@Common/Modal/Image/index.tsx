import React from 'react';
import * as S from './styles';
import { ImageModalProps } from '@/interface/modal';
import usePreventScroll from '@/hook/usePreventScroll';

function ImageModal(props: ImageModalProps) {
  const { state, setState, onChanger, onOriginChanger } = props;
  const onClose = () => {
    setState(false);
  };

  usePreventScroll(state);

  return (
    <S.ModalWrap>
      <S.Background />
      <S.Modal>
        <S.ModalInnerWrap>
          <S.TitleWrap>
            <S.Title>사진 수정</S.Title>
            <S.Close onClick={onClose} />
          </S.TitleWrap>
          <S.ButtonWrap>
            <S.CustomButton onClick={onOriginChanger}>기본 이미지로 변경</S.CustomButton>
            <S.CustomButton onClick={onChanger}>프로필 사진 수정</S.CustomButton>
          </S.ButtonWrap>
        </S.ModalInnerWrap>
      </S.Modal>
    </S.ModalWrap>
  );
}

export default ImageModal;
