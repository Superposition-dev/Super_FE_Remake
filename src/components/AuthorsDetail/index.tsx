import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import 'swiper/css';
import { AuthorDetailProps, AuthorProductsProps, AuthorsProps } from '@/interface/authors';
import { Pagination, FreeMode } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { FaInstagram } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate, useMutation, useQuery } from 'react-query';
import { getCookie } from '@/util/cookie';
import { addFollow, deleteFollow, getUserFollow } from '@/api/user';
import CommonWrapper from '../@Common/Wrap';
import Portal from '../@Common/Modal';
import InduceLoginModal from '../@Common/Modal/InduceLogin';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');

  await queryClient.prefetchQuery('userFollow', () => getUserFollow(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function AuthorsDetail({ data, id }: { data: AuthorDetailProps; id: string }) {
  const { name, profile, introduce, display, products, instagramId, description } = data;
  const [plus, setPlus] = React.useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const token = getCookie('accessToken');
  const router = useRouter();
  const length = description.length;

  const { data: authors } = useQuery<AuthorsProps[]>(['userFollow'], () => getUserFollow(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userFollow');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const { mutate: addFollowMutate } = useMutation(addFollow, {
    onSuccess: () => {
      setFollow((prevFollow) => !prevFollow);
    },
    onError: () => {
      setFollow(!follow);
    },
  });

  const { mutate: deleteFollowMutate } = useMutation(deleteFollow, {
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

  const handleFollow = useCallback(() => {
    if (token) {
      follow ? deleteFollowMutate({ instagramId, token }) : addFollowMutate({ instagramId, token });
    } else {
      setOpen(true);
    }
  }, [instagramId, token, follow, addFollowMutate, deleteFollowMutate]);

  useEffect(() => {
    if (authors === undefined) return;
    console.log('dd');

    authors.map((item) => {
      console.log(item.instagramId);
      console.log(id);
      if (String(item.instagramId) === id) {
        setFollow(true);
      } else setFollow(false);
    });
  }, [authors, id]);

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
            <S.FollowButton onClick={handleFollow} follow={follow}>
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
