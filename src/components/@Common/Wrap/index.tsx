import React from 'react';
import * as S from './styles';
import { CommonWrapperProps } from '@/interface/common';

function CommonWrapper({ children }: CommonWrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default CommonWrapper;
