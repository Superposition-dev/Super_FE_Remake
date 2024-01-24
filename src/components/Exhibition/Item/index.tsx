import React from 'react';
import * as S from './styles';
import { ExhibitionProps } from '@/interface/exhibition';
import { customNullImg } from '@/util/utils';

function Exhibition(props: ExhibitionProps) {
  const { exhibition } = props;
  const isDisplay = exhibition.isDisplay ? '전시 중' : '전시 종료';

  return (
    <S.ExhibitionWrap>
      <S.ImageWrap>
        <S.CustomImage src={customNullImg(exhibition.picture)} alt="전시 이미지" fill />
      </S.ImageWrap>
      <S.InnerWrap>
        <S.InnerTopWrap>
          <S.Type isDisplay={exhibition.isDisplay ? true : false}>{isDisplay}</S.Type>
          <S.TitleWrap>
            <S.Title>{exhibition.title}</S.Title>
            <S.SubTitle>{exhibition.subtitle}</S.SubTitle>
          </S.TitleWrap>
        </S.InnerTopWrap>
        <S.InnerBottomWrap>
          <S.Desc>
            <S.LocationIcon />
            {exhibition.location}
          </S.Desc>
          <S.Desc>
            <S.DateIcon />
            {`${exhibition.startDate} ~ ${exhibition.endDate}`}
          </S.Desc>
        </S.InnerBottomWrap>
      </S.InnerWrap>
    </S.ExhibitionWrap>
  );
}

export default Exhibition;
