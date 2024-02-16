import React from 'react';
import * as S from './styles';
import { CommonTitleProps } from '@/interface/common';

function CommonTitle({ data }: { data: CommonTitleProps }) {
  const { TITLE, SUBTITLE } = data;
  return (
    <S.TitleWrap>
      <S.Title>{TITLE}</S.Title>
      <S.SubTitle>{SUBTITLE}</S.SubTitle>
    </S.TitleWrap>
  );
}

export default React.memo(CommonTitle);
