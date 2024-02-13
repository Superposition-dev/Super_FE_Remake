import React, { useCallback, useState } from 'react';
import * as S from './styles';
import { AuthorDetailProps, AuthorProductsProps } from '@/interface/authors';
import Image from 'next/image';
import 'swiper/css';
import { Pagination, FreeMode } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import CommonWrapper from '../@Common/Wrap';
import { useMutation } from 'react-query';
import Portal from '../@Common/Modal';
import InduceLoginModal from '../@Common/Modal/InduceLogin';
import { postFollow } from '@/api/author';
import { getCookie } from '@/util/cookie';

function AuthorsDetail({ data }: { data: AuthorDetailProps }) {
  const { name, profile, introduce, display, products, instagramId, description } = data;
  const [plus, setPlus] = React.useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const token = getCookie('accessToken');
  const router = useRouter();
  const length = description.length;

  const { mutate: followMutate } = useMutation(postFollow, {
    onSuccess: () => {
      setFollow((prevFollow) => !prevFollow);
    },
    onError: () => {
      setFollow(!follow);
    },
  });

  const onPlus = useCallback(() => {
    setPlus((prevPlus) => !prevPlus);
  }, []);

  const handleLike = useCallback(() => {
    token ? followMutate({ instagramId, token }) : setOpen(true);
  }, [instagramId, followMutate, token]);

  return (
    <>
      <CommonWrapper>
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
              <S.AuthorIntro>{introduce}</S.AuthorIntro>
            </S.AuthorInfo>
            <S.FollowButton onClick={handleLike} follow={follow}>
              {follow ? <S.CheckIcon /> : '팔로우'}
            </S.FollowButton>
          </S.AuthorInfoWrap>
          <S.AuthorWrap>
            <S.Title>작가 소개</S.Title>
            <S.Description plus={plus}>{description}</S.Description>
            {length > 120 && <S.PlusButton onClick={onPlus}>{plus ? '간략히 보기' : '더보기'}</S.PlusButton>}
          </S.AuthorWrap>
          <S.AuthorWrap>
            <S.Title>대표 작품</S.Title>
            <S.ImageSwiper slidesPerView={2.3} spaceBetween={10} freeMode={true} modules={[FreeMode, Pagination]}>
              {products.map((item: AuthorProductsProps, index) => (
                <SwiperSlide key={index}>
                  <S.ImageWrap
                    onClick={() => {
                      router.push(`/product/${item.productId}`);
                    }}
                  >
                    <Image
                      src={`https://kr.object.ncloudstorage.com/superposition-bucket/${item.picture}`}
                      alt="작품"
                      loading="eager"
                      fill
                    />
                  </S.ImageWrap>
                </SwiperSlide>
              ))}
            </S.ImageSwiper>
          </S.AuthorWrap>
          <S.AuthorWrap>
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
          </S.AuthorWrap>
        </S.AuthorDetailWrap>
      </CommonWrapper>
      <Portal>
        {open ? (
          <InduceLoginModal desc="회원이 되면 작가님을 팔로우 할 수 있어요." state={open} setState={setOpen} />
        ) : (
          <></>
        )}
      </Portal>
    </>
  );
}

export default React.memo(AuthorsDetail);
