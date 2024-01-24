import React from 'react';
import * as S from './styles';
import Image from 'next/image';

type ExhibitionProps = {
  id: number;
  img: string;
  state: boolean;
  title: string;
  date: string;
};

function Exhibition({ data }: { data: ExhibitionProps }) {
  const { img, title, date, state } = data;
  return (
    <S.PosterWrap>
      <S.Box img={img}>
        <S.TextWrap>
          {state ? <S.BoxState state={state}>COMMING SOON</S.BoxState> : <S.BoxState state={state}>END</S.BoxState>}
          <S.BoxTitle state={state}>{title}</S.BoxTitle>
          <S.BoxDate state={state}>{date}</S.BoxDate>
        </S.TextWrap>
        {
          !state&&
        <S.BoxCover />
        }
      </S.Box>
      <S.Info state={state}>
        <S.InfoTitle>{title}</S.InfoTitle>
        <S.InfoDate>{date}</S.InfoDate>
        {
          state&&
        <S.InfoState>COMMING SOON</S.InfoState>
        }
      </S.Info>
    </S.PosterWrap>
  );
}

export default Exhibition;
