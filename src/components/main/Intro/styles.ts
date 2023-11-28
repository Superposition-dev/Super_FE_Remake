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
    transform: rotate(80deg) translateY(-80%);
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

export const IntroSection = styled.section`
  ${({ theme }) => theme.layout.overFlowHidden};
  position: relative;
  @media (max-width: 768px) {
  }
`;

export const PlanetWrap = styled.div<{ vh: number }>`
  position: absolute;
  width: 200%;
  left: -50%;
  right: -50%;
  transform: rotate(55deg);
  z-index: 0;
  /* animation: ${keyframesPlanet} 426s linear infinite; */
  @media (max-width: 768px) {
    top: calc(-16vh - ${({ vh }) => vh * 4}px);
  }
  @media (max-width: 425px) {
    top: calc(-20vh - ${({ vh }) => vh * 2}px);
  }
  @media (max-width: 374px) {
    top: calc(-24vh - ${({ vh }) => vh}px);
  }
`;

export const LogoWrap = styled.div`
  width: 6vh;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  transform: translateY(-50%);
  opacity: 0;
  animation: ${fadeInUp} 0.7s ease-in-out 0.2s forwards;
`;

export const SmallPlanetWrap = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 20;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-in 1s forwards;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

export const MediumPlanetWrap = styled.div`
  position: absolute;
  top: 15%;
  right: -43%;
  z-index: 20;
  transform: rotate(80deg) translateY(-60%);
  animation: ${showPlanet} 0.7s ease-in 0.3s forwards;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CatWrap = styled.div`
  position: absolute;
  z-index: 20;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.5s forwards;
  @media (max-width: 768px) {
    width: 12vh;
    top: 46%;
    left: 28%;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  z-index: 20;
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
  ${({ theme }) => theme.font.bold_3vh};
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.font.regular_14};
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(140deg, rgba(0, 0, 0, 0.9) 3%, transparent 20%, transparent 90%, #101010 100%);
  background-color: transparent;
`;
