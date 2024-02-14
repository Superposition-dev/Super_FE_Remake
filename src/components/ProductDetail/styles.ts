import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { MdArrowForwardIos } from 'react-icons/md';

const redShadowLight = keyframes`
  0%{
    filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.1));
  }
  50%{
    filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.2));
  }
  100%{
    filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.1));
  }
`;
const whiteShadowLight = keyframes`
  0%{
    filter: drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.1));
  }
  50%{
    filter: drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.2));
  }
  100%{
    filter: drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.1));
  }
`;
const heartBling = keyframes`
  0% { transform: scale( 1.0 ); }
    30% { transform: scale( 0.9 ); }
    50% { transform: scale( 1.0 ); }
    70% { transform: scale( 0.9 ); }
    100% { transform: scale( 1.0 ); }
`;
export const ProductContainer = styled.div`
  width: 100%;
  padding: 5rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProductInfoWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem 2rem 2rem;
`;

export const Copy = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.bold_10};
`;

export const CopyText = styled.p``;

export const NameWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
`;

export const TitleWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  width: 80%;
  height: 100%;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.font.bold_20};
  margin-bottom: 0.3rem;
`;

export const Code = styled.p`
  ${({ theme }) => theme.font.bold_10};
  color: ${({ theme }) => theme.colors.dark_gray};
`;

export const Like = styled.div<{ like: boolean }>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ like }) => (like ? redShadowLight : whiteShadowLight)} 5s infinite;
  border-radius: 6px;
`;

export const Heart = styled(FaHeart)`
  color: #fe0808;
  animation: ${heartBling} 3s infinite 1s;
`;

export const UnHeart = styled(FaRegHeart)``;

export const InfoWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.3rem;
  margin-top: 0.2rem;
`;

export const DescWrap = styled.div`
  ${({ theme }) => theme.font.regular_14};
`;

export const Type = styled.span``;

export const Tags = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  gap: 0.6rem;
  ${({ theme }) => theme.flex.bold_12};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Tag = styled.span``;

export const AuthorWrap = styled.div`
  width: 100%;
  height: 6.2rem;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${whiteShadowLight} 5s infinite;
  border-radius: 6px;
`;

export const AuthorBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1rem;
`;

export const AuthorImageWrap = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const AuthorName = styled.h2`
  ${({ theme }) => theme.font.bold_14};
`;

export const RightArrow = styled(MdArrowForwardIos)`
  font-size: 2.4rem;
`;

export const AuthorNote = styled.div``;

export const AuthorTitle = styled.h3`
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.2rem;
`;

export const NoteText = styled.p`
  ${({ theme }) => theme.font.regular_14};
  white-space: pre-line;
  word-break: keep-all;
`;

export const PriceBox = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  width: 45%;
  ${({ theme }) => theme.font.bold_20};
  ${({ theme }) => theme.flex.flexCenter};
`;

export const BuyButton = styled(Link)`
  width: 55%;
  height: 100%;
  ${({ theme }) => theme.flex.flexCenter};
  background-color: ${({ theme }) => theme.colors.purple};
  ${({ theme }) => theme.font.bold_20};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
