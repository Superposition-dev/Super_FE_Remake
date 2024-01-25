import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { CommonFloatingProps } from '@/interface/common';

function Floating({ title, src, handler }: CommonFloatingProps) {
  return (
    <S.FloatingWrap onClick={handler}>
      <S.FloatingImageWrap>
        <Image src={src} alt="" width="24" height="26" />
      </S.FloatingImageWrap>
      <S.FloatingTitle>{title}</S.FloatingTitle>
    </S.FloatingWrap>
  );
}

export default Floating;
