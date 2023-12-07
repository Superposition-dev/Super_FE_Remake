import styled from '@emotion/styled';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
import { Swiper } from 'swiper/react';

export const AuthorDetailWrap = styled.div`
  width: 100%;
  padding: 6rem 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const AuthorInfoWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
export const AuthorImage = styled.div`
  width: 25vw;
  height: 25vw;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.2);
    z-index: 1;
  }
`;
export const AuthorInfo = styled.div``;

export const AuthorState = styled.div`
  width: 5rem;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.colors.light_purple};
  ${({ theme }) => theme.flex.flexCenter};
  text-align: center;
  ${({ theme }) => theme.font.bold_14};
  border-radius: 5px;
`;

export const AuthorName = styled.h1`
  ${({ theme }) => theme.font.bold_20};
  margin-top: 1rem;
`;

export const AuthorMsg = styled.p`
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.font.regular_14};
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Description = styled.p<{ plus: boolean }>`
  ${({ theme }) => theme.font.regular_14};
  color: ${({ theme }) => theme.colors.gray}; /* Updated */
  /* Specific transition for max-height */
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: ${({ plus }) => (plus ? '100' : '5')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
  transition: all 1s ease-in-out;
`;

export const PlusButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const ImageSwiper = styled(Swiper)`
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
`;
export const Icon = styled.div`
  background-color: #000;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.2));
`;
