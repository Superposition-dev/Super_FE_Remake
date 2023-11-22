import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import * as S from './styles';
import Intro from './Intro';
function MainPage() {
  return (
    <S.SwiperWrap
      direction={'vertical'}
      slidesPerView={1}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <S.SwiperItem>
        <Intro />
      </S.SwiperItem>
    </S.SwiperWrap>
  );
}

export default MainPage;
