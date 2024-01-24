import React from 'react';
import * as S from './styles';
import { SwiperSlide } from 'swiper/react';
import Exhibition from './Exhibition';
import 'swiper/css';
const data = [
  {
    id: 1,
    img: '/images/poster1.webp',
    state: false,
    title: '성수 POSITION 2차',
    date: '11.20 ~ 12.12',
  },
  {
    id: 2,
    img: '/images/poster2.webp',
    state: false,
    title: '슈퍼포지션 1차 기획 전시',
    date: '11.10 ~ 11.12',
  },
];

function ExhibitionList() {
  return (
    <S.ExhibitionListWrap>
      {data.map((item) => (
          <Exhibition key={item.id} data={item} />
      ))}
    </S.ExhibitionListWrap>
  );
}

export default ExhibitionList;
