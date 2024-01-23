import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { ProductDetailProps } from '@/interface/product';
import { useRouter } from 'next/router';
import { getItemWithExpire, toggleLike } from '@/util/localstorage';
import { useMutation } from 'react-query';
import { patchFormClick, patchLike, patchView } from '@/api/patchData';

const NOTE =
  'Nisl faucibus sollicitudin elementum commodo cursus ullamcorper senectus ut. Urna euismod feugiat convallis in mi neque. Nascetur etiam blandit sem amet. Odio viverra molestie ';

function ProductDetail({ data }: { data: ProductDetailProps }) {
  const { picture, title, tags, artistInfo, pictureInfo, description, price, productId } = data;
  const [like, setLike] = useState(false);
  const No = String(productId).padStart(3, '0');
  const priceNum = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const router = useRouter();
  const onLinked = () => {
    router.push(`/authors/${artistInfo.instagramId}`);
  };
  const { mutate: viewMutate } = useMutation(patchView);

  const { mutate: likeMutate } = useMutation(patchLike, {
    onSuccess: () => {
      toggleLike(productId);
    },
    onError: () => {
      setLike(!like);
    },
  });

  const { mutate: formMutate } = useMutation(patchFormClick);

  const handleLike = useCallback(() => {
    setLike((prevLike) => !prevLike);
    likeMutate({ id: productId, like: !like });
  }, [like, productId, likeMutate]);

  useEffect(() => {
    const validView = getItemWithExpire('views', `products-${productId}`);
    if (validView) {
      viewMutate({ title: 'products', id: productId });
    }
    const likedPosts = JSON.parse(String(localStorage.getItem('likedPost'))) || [];
    // 게시물이 이미 좋아요를 누른 상태인지 확인
    const isLiked = likedPosts.includes(productId);
    setLike(isLiked);
  }, []);
  return (
    <S.DetailContainer>
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
        <S.FlexBox>
          <S.TitleWrap>
            <S.Title>{title}</S.Title>
            <S.Code>No.{No}</S.Code>
          </S.TitleWrap>
          <S.IsLike like={like} onClick={handleLike}>
            {like ? <S.Heart /> : <S.UnHeart />}
          </S.IsLike>
        </S.FlexBox>
        <S.InfoWrap>
          <S.InfoType>{pictureInfo.type}, </S.InfoType>
          <S.InfoType>{pictureInfo.size}, </S.InfoType>
          <S.InfoType>{pictureInfo.year}</S.InfoType>
        </S.InfoWrap>
        <S.Tags>
          {tags.map((item: string, index: number) => (
            <S.Tag key={index}>#{item}</S.Tag>
          ))}
        </S.Tags>
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
          <S.AuthorTitle>작가노트</S.AuthorTitle>
          <S.NoteText>{description}</S.NoteText>
        </S.AuthorNote>
      </S.ProductInfoWrap>
      <S.PriceBox>
        <S.Price>{priceNum}원</S.Price>
        <S.BuyButton href={'https://forms.gle/8aV6YfbUjbHFKgf7A'} target="_blank" onClick={() => formMutate(productId)}>
          구매하기
        </S.BuyButton>
      </S.PriceBox>
    </S.DetailContainer>
  );
}

export default React.memo(ProductDetail);
