import React from 'react';
import * as S from './styles';
import { ExhibitionProps } from '@/interface/exhibition';
import { customNullImg } from '@/util/utils';

function Exhibition(props: ExhibitionProps) {
  const { exhibition } = props;

  return (
    <S.ExhibitionWrap>
      <S.ImageWrap>
        <S.CustomImage
          src={
            // customNullImg(exhibition.poster)
            customNullImg('')
          }
          alt="전시 이미지"
          fill
        />
      </S.ImageWrap>
      <S.InnerWrap>
        <S.InnerTopWrap>
          <S.Type isDisplay={exhibition.status === '전시중' ? true : false}>{exhibition.status}</S.Type>
          <S.TitleWrap>
            <S.Title>{exhibition.title}</S.Title>
            <S.SubTitle>{exhibition.subHeading}</S.SubTitle>
          </S.TitleWrap>
        </S.InnerTopWrap>
        <S.InnerBottomWrap>
          <S.DescWrap>
            <S.LocationIcon />
            <S.Desc>{exhibition.location}</S.Desc>
          </S.DescWrap>
          <S.DescWrap>
            <S.DateIcon />
            <S.Desc>{`${exhibition.startDate} ~ ${exhibition.endDate}`}</S.Desc>
          </S.DescWrap>
        </S.InnerBottomWrap>
      </S.InnerWrap>
    </S.ExhibitionWrap>
  );
}

export default Exhibition;
