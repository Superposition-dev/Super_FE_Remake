import React, { useCallback, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { ProductDetailProps } from '@/interface/product';
import { patchFormClick, patchLike } from '@/api/patchData';
import { priceFormatter, seqFormatter } from '@/util/utils';
import Portal from '../@Common/Modal';
import InduceLoginModal from '../@Common/Modal/InduceLogin';
import usePreventOverlay from '@/hook/usePreventScroll';

function ProductDetail({ data }: { data: ProductDetailProps }) {
  const { picture, title, tags, artistInfo, pictureInfo, description, price, productId } = data;
  const [like, setLike] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const { mutate: formMutate } = useMutation(patchFormClick);
  const { mutate: likeMutate } = useMutation(patchLike, {
    onSuccess: () => {
      setLike((prevLike) => !prevLike);
    },
    onError: () => {
      setLike(!like);
    },
  });

  const onLinked = () => {
    router.push(`/authors/${artistInfo.instagramId}`);
  };

  const handleLike = useCallback(() => {
    isLogin ? likeMutate({ id: productId, like: !like }) : setOpen(true);
  }, [like, productId, likeMutate, isLogin]);

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
