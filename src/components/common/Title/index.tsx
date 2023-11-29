import React from 'react';
import * as S from './styles';
import { CommonTitleData } from '@/interface/commonTitle';

function CommonTitle({ data }: { data: CommonTitleData }) {
  const { title, subTitle } = data;
  return (
    <S.TitleWrap>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrap>
  );
}

export default CommonTitle;
