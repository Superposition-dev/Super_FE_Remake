import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 대형행성 애니메이션
const keyframesPlanet = keyframes`
  0% {
    transform: rotate(55deg);
  }
  100% {
    transform: rotate(415deg);
  }
`;

// 중형행성 애니메이션
const showPlanet = keyframes`
  0% {
    transform: rotate(80deg) translateY(-40%);
  }
  100% {
    transform: rotate(0) translateY(0);
  }
`;

// 로고 애니메이션
const fadeInUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  } 
`;

// 고양이, 작은행성 애니메이션
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  } 
`;

// 텍스트 애니메이션
const fadeInText = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  } 
`;

// 화살표 애니메이션
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
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;

export const PlanetWrap = styled.div`
  position: absolute;
  width: 200%;
  left: -50%;
  right: -50%;
  transform: rotate(55deg);
  z-index: 1;
  animation: ${keyframesPlanet} 480s linear infinite;
  @media (max-width: 768px) {
    top: -18%;
  }
  @media (max-width: 411px) {
    top: -22%;
  }
  @media (max-width: 380px) {
    top: -30%;
  }
`;

export const LogoWrap = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  transform: translateY(-50%);
  opacity: 0;
  animation: ${fadeInUp} 0.7s ease-in-out 0.2s forwards;
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
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-in 1s forwards;
  @media (max-width: 768px) {
    width: 15%;
  }
`;
export const MediumPlanetWrap = styled.div`
  position: absolute;
  top: 15%;
  right: -35%;
  z-index: 2;
  transform: rotate(80deg) translateY(-40%);
  animation: ${showPlanet} 0.8s ease-in 0.2s forwards;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CatWrap = styled.div`
  position: absolute;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.5s forwards;
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
  z-index: 2;
  opacity: 0;
  transform: translateX(-10%);
  animation: ${fadeInText} 1s ease-in-out 0.6s forwards;
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

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(140deg, rgba(0, 0, 0, 0.9) 3%, transparent 20%, transparent 90%, #101010 100%);
  background-color: transparent;
`;
