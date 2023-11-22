import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { SwiperSlide } from 'swiper/react';

const updown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const SwiperSection = styled.section`
  height: 100%;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;

export const PlanetWrap = styled.div<{ height: number }>`
  position: absolute;
  width: 200%;
  left: -50%;
  right: -50%;
  transform: rotate(55deg);
  @media (max-width: 768px) {
    top: -17%;
  }
  @media (max-width: 411px) {
    top: -30%;
  }
`;

export const LogoWrap = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    width: 15%;
  }
  @media (max-width: 411px) {
    width: 13%;
  }
`;

export const SmallPlanetWrap = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  @media (max-width: 768px) {
    width: 15%;
  }
`;
export const MediumPlanetWrap = styled.div`
  position: absolute;
  top: 15%;
  right: -35%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CatWrap = styled.div`
  position: absolute;
  @media (max-width: 768px) {
    width: 30%;
    top: 46%;
    left: 25%;
  }
  @media (max-width: 411px) {
    width: 25%;
    top: 47%;
    left: 27%;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  @media (max-width: 768px) {
    width: 80%;
    top: auto;
    bottom: 10%;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.font.bold_20};
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.font.regular_12};
`;

export const ArrowWrap = styled.div`
  width: 10%;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: ${updown} 1s ease infinite;
`;
