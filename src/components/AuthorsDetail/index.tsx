import React, { useMemo, useEffect, useCallback } from 'react';
import * as S from './styles';
import { AuthorDetailProps, AuthorProductsProps } from '@/interface/authors';
import Image from 'next/image';
import 'swiper/css';
import { Pagination, FreeMode } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { patchView } from '@/api/patchData';
import { getItemWithExpire } from '@/util/localstorage';

function AuthorsDetail({ data }: { data: AuthorDetailProps }) {
  const { name, profile, introduce, display, products, instagramId, description } = data;
  const [plus, setPlus] = React.useState<boolean>(false);
  const onPlus = useCallback(() => {
    setPlus(prevPlus => !prevPlus);
  }, []);
  const router = useRouter(); 
  const { mutate } = useMutation(patchView);
  useEffect(() => {
    const validView = getItemWithExpire('views', `products-${instagramId}`);
    if (validView) {
      mutate({ title: 'artist', id: instagramId });
    }
  }, []);
  const length = description.length;

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
      <S.Description plus={plus}>{description}</S.Description>
      {
length > 120 &&
      <S.PlusButton onClick={onPlus}>{plus ? '간략히 보기' : '더보기'}</S.PlusButton>
      }
      <S.Title>대표 작품</S.Title>
      <S.ImageSwiper slidesPerView={2.3} spaceBetween={10} freeMode={true} modules={[FreeMode, Pagination]}>
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
                loading='eager'
                fill
              />
            </S.ImageWrap>
          </SwiperSlide>
        ))}
      </S.ImageSwiper>
      <S.Title>SNS</S.Title>
      <S.IconsWrap>
        <S.Icon>
          <FaInstagram
            onClick={() => {
              router.push(`https://www.instagram.com/${instagramId}`);
            }}
          />
        </S.Icon>
      </S.IconsWrap>
    </S.AuthorDetailWrap>
  );
}

export default React.memo(AuthorsDetail);
