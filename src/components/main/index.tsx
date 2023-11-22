import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import * as S from './styles';
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
    ></S.SwiperWrap>
  );
}

export default MainPage;
