import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { FaCheck } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

export const AuthorDetailWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;
`;

export const AuthorInfoWrap = styled.div`
  width: 100%;
  height: 10rem;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1.25rem;
`;
export const AuthorImage = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const AuthorInfo = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.25rem;
  width: 50%;
`;

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
  width: 100%;
  margin-top: 0.75rem;
  ${({ theme }) => theme.font.bold_20};
  ${({ theme }) => theme.layout.ellipsis};
`;

export const AuthorIntro = styled.p`
  width: 100%;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.layout.ellipsis};
`;

export const FollowButton = styled.button<{ follow: boolean }>`
  ${({ theme }) => theme.flex.flexCenter};
  width: 5.6rem;
  height: 2.9rem;
  margin-left: auto;
  border-radius: 4rem;
  border: ${({ follow }) => (follow ? '1px solid white' : '')};
  ${({ theme }) => theme.font.bold_12};
  background-color: ${({ theme, follow }) => (follow ? 'transparent' : theme.colors.purple)};
  color: ${({ theme }) => theme.colors.white};
`;

export const CheckIcon = styled(FaCheck)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const AuthorWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.5rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.font.regular_14};
  font-weight: 700;
`;

export const Description = styled.p<{ plus: boolean }>`
  ${({ theme }) => theme.font.regular_14};
  color: ${({ theme }) => theme.colors.gray};
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: ${({ plus }) => (plus ? '100' : '5')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 1s ease-in-out;
  white-space: pre-line;
  word-break: keep-all;
`;

export const PlusButton = styled.button`
  padding: 0.5rem 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.font.bold_12};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const ImageSwiper = styled(Swiper)`
  max-width: 100%;
  width: 100%;
  padding-top: 0.25rem;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 40vw;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    background-color: ${({ theme }) => theme.colors.light_gray};
  }
`;

export const Text = styled.p`
  ${({ theme }) => theme.flex.flexCenter};
  height: 5rem;
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Icon = styled.div`
  background-color: #000;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 2.4rem;
  border-radius: 0.5rem;
  filter: drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.2));
  cursor: pointer;
`;

export const Insta = styled(FaInstagram)`
  width: 2rem;
  height: 2rem;
`;

export const Id = styled.span`
  ${({ theme }) => theme.font.bold_12};
  color: ${({ theme }) => theme.colors.white};
`;
