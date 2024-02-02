import React from 'react';
import * as S from './styles';
import { CommonWrapperProps } from '@/interface/common';

function CommonWrapper({ children, transparent }: CommonWrapperProps) {
  return <S.Wrapper transparent={transparent}>{children}</S.Wrapper>;
}

export default CommonWrapper;
