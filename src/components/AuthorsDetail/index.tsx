import React, { useMemo } from 'react';
import * as S from './styles';
import { AuthorDetailProps, AuthorProductsProps } from '@/interface/authors';
import Image from 'next/image';
import 'swiper/css';
import { Pagination, FreeMode } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';

function AuthorsDetail({ data }: { data: AuthorDetailProps }) {
  const { name, profile, introduce, display, products } = data;
  const [plus, setPlus] = React.useState<boolean>(false);
  const onPlus = () => {
    setPlus(!plus);
  };
  const router = useRouter();
  const memoizedDescription = useMemo(
    () =>
      "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ); // Add dependencies if any

  return (
    <S.AuthorDetailWrap>
      <S.AuthorInfoWrap>
        <S.AuthorImage>
          <Image
            src={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
            alt="작가 사진"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`https://kr.object.ncloudstorage.com/superposition-bucket/${profile}`}
            fill
          />
        </S.AuthorImage>
        <S.AuthorInfo>
          {display && <S.AuthorState>NOW</S.AuthorState>}
          <S.AuthorName>{name}</S.AuthorName>
          <S.AuthorMsg>{introduce}</S.AuthorMsg>
        </S.AuthorInfo>
      </S.AuthorInfoWrap>
      <S.Title>작가 소개</S.Title>
      <S.Description plus={plus}>{memoizedDescription}</S.Description>
      <S.PlusButton onClick={onPlus}>{plus ? '간략히 보기' : '더보기'}</S.PlusButton>
      <S.Title>대표 작품</S.Title>
      <S.ImageSwiper slidesPerView={2} spaceBetween={30} freeMode={true} modules={[Pagination]} loop={true}>
        {products.map((item: AuthorProductsProps, index) => (
          <SwiperSlide key={index}>
            <S.ImageWrap
              onClick={() => {
                router.push(`/products/${item.productId}`);
              }}
            >
              <Image
                src={`https://kr.object.ncloudstorage.com/superposition-bucket/${item.picture}`}
                alt="작품"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`https://kr.object.ncloudstorage.com/superposition-bucket/${item.picture}`}
                fill
              />
            </S.ImageWrap>
          </SwiperSlide>
        ))}
      </S.ImageSwiper>
      <S.Title>SNS</S.Title>
      <S.IconsWrap>
        <S.Icon>
          <FaInstagram />
        </S.Icon>
      </S.IconsWrap>
    </S.AuthorDetailWrap>
  );
}

export default AuthorsDetail;
