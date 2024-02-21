import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate, useMutation, useQuery } from 'react-query';
import { ProductDetailProps, ProductType } from '@/interface/product';
import { patchFormClick } from '@/api/patchData';
import { addLike, deleteLike, getUserLike } from '@/api/user';
import { priceFormatter, seqFormatter } from '@/util/utils';
import { getCookie } from '@/util/cookie';
import Portal from '../@Common/Modal';
import InduceLoginModal from '../@Common/Modal/InduceLogin';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');
  await queryClient.prefetchQuery('userLike', () => getUserLike(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function ProductDetail({ data, id }: { data: ProductDetailProps; id: string }) {
  const { picture, title, tags, artistInfo, pictureInfo, description, price, productId } = data;
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const token = getCookie('accessToken');
  const router = useRouter();

  const { data: products } = useQuery<ProductType[]>(['userLike'], () => getUserLike(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userLike');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const { mutate: formMutate } = useMutation(patchFormClick);
  const { mutate: addLikeMutate } = useMutation(addLike, {
    onSuccess: () => {
      setLike((prevLike) => !prevLike);
    },
    onError: () => {
      setLike(!like);
    },
  });

  const { mutate: deleteLikeMutate } = useMutation(deleteLike, {
    onSuccess: () => {
      setLike((prevLike) => !prevLike);
    },
    onError: () => {
      setLike(!like);
    },
  });

  const handleLike = useCallback(() => {
    if (token) {
      like ? deleteLikeMutate({ id: productId, token: token }) : addLikeMutate({ id: productId, token: token });
    } else {
      setOpen(true);
    }
  }, [productId, token, like, addLikeMutate, deleteLikeMutate]);

  const onLinked = () => {
    router.push(`/authors/${artistInfo.instagramId}`);
  };

  useEffect(() => {
    if (products === undefined) return;

    products.map((item) => {
      if (String(item.productId) === id) {
        setLike(true);
      }
    });
  }, [products, id]);

  return (
    <>
      <S.ProductContainer>
        <S.ImageWrap>
          <S.ProductImage
            src={`https://kr.object.ncloudstorage.com/superposition-bucket/${picture}`}
            alt="이미지"
            width={360}
            height={594}
          />
        </S.ImageWrap>
        <S.ProductInfoWrap>
          <S.Copy>
            <S.CopyText>무단 도용 및 재배포를 금지합니다.</S.CopyText>
            <S.CopyText>ⓒ 2023. {artistInfo.artistName}. All rights reserved.</S.CopyText>
          </S.Copy>
          <S.NameWrap>
            <S.TitleWrap>
              <S.Title>{title}</S.Title>
              <S.Code>No.{seqFormatter(productId)}</S.Code>
            </S.TitleWrap>
            <S.Like like={like} onClick={handleLike}>
              {like ? <S.Heart /> : <S.UnHeart />}
            </S.Like>
          </S.NameWrap>
          <S.InfoWrap>
            <S.DescWrap>
              <S.Type>{pictureInfo.type}, </S.Type>
              <S.Type>{pictureInfo.size}, </S.Type>
              <S.Type>{pictureInfo.year}</S.Type>
            </S.DescWrap>
            <S.Tags>
              {tags.map((item: string, index: number) => (
                <S.Tag key={index}>#{item}</S.Tag>
              ))}
            </S.Tags>
          </S.InfoWrap>
          <S.AuthorWrap onClick={onLinked}>
            <S.AuthorBox>
              <S.AuthorImageWrap>
                <Image
                  src={`https://kr.object.ncloudstorage.com/superposition-bucket/${artistInfo.profile}`}
                  alt="이미지"
                  width={48}
                  height={48}
                />
              </S.AuthorImageWrap>
              <S.AuthorName>{artistInfo.artistName}</S.AuthorName>
            </S.AuthorBox>
            <S.RightArrow />
          </S.AuthorWrap>
          <S.AuthorNote>
            <S.AuthorTitle>작가 노트</S.AuthorTitle>
            <S.NoteText>{description}</S.NoteText>
          </S.AuthorNote>
        </S.ProductInfoWrap>
        <S.PriceBox>
          <S.Price>{priceFormatter(price)}원</S.Price>
          <S.BuyButton
            href={'https://forms.gle/8aV6YfbUjbHFKgf7A'}
            target="_blank"
            onClick={() => formMutate(productId)}
          >
            구매하기
          </S.BuyButton>
        </S.PriceBox>
      </S.ProductContainer>
      <Portal>
        {open ? (
          <InduceLoginModal desc="회원이 되면 내 취향을 모아볼 수 있어요." state={open} setState={setOpen} />
        ) : (
          <></>
        )}
      </Portal>
    </>
  );
}

export default React.memo(ProductDetail);
