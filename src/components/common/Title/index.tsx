import React from 'react';
import * as S from './styles';
import { CommonTitleProps } from '@/interface/commonTitle';

function CommonTitle({ data }: { data: CommonTitleProps }) {
  const { title, subTitle } = data;
  return (
    <S.TitleWrap>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrap>
  );
}

export default React.memo(CommonTitle);
