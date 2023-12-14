import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import * as S from './styles';
import Intro from './Intro';
import Poster from './Poster';
import ScrollArrow from '../common/ScrollArrow';
import FirstAbout from './FirstAbout';
import SecondAbout from './SecondAbout';
import Footer from './Footer';
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
      watchSlidesProgress={true}
    >
      <S.SwiperItem>
        <Intro />
      </S.SwiperItem>
      <S.SwiperItem>
        <Poster />
      </S.SwiperItem>
      <S.SwiperItem>
        <FirstAbout />
      </S.SwiperItem>
      <S.SwiperItem>
        <SecondAbout />
      </S.SwiperItem>
      <S.SwiperItem>
        <Footer/>
      </S.SwiperItem>
      <ScrollArrow />
    </S.SwiperWrap>
  );
}

export default MainPage;
