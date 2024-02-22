import React from 'react';
import * as S from './styles';
import { SwiperSlide } from 'swiper/react';
import Exhibition from './Exhibition';
import 'swiper/css';
const data = [
  {
    id: 1,
    img: '/images/poster4.webp',
    state: false,
    title: '여기는 따듯해',
    date: '12.16 ~ 12.25',
  },
  {
    id: 2,
    img: '/images/poster1.webp',
    state: false,
    title: '성수 POSITION 2차',
    date: '11.20 ~ 12.12',
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
