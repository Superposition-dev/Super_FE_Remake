import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';


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
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    margin: 0 auto;
    transform: translateY(-50%);
    width: 200%;
    left: -50%;
    right: -50%;
    top: calc(-16vh - ${({ vh }) => vh * 4}px);
    transform: rotate(0);

  }
  @media (max-width: 425px) {
    top: calc(-20vh - ${({ vh }) => vh * 2}px);
  }
  @media (max-width: 374px) {
    top: calc(-24vh - ${({ vh }) => vh}px);
  }
`;

export const DarkPlanetWrap = styled.div<{ vh: number }>`
  position: absolute;
  width: 77%;
  z-index: 0;
  display:block;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoWrap = styled.div`
  display:none;
  @media (max-width: 768px) {
    display:block;
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
  }
`;

export const MainLogoWrap = styled.div`
  width: 50%;
  position: relative;
  margin: 0 auto;
  top: 15%;
  @media (max-width: 1440px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallPlanetWrap = styled.div`
  position: absolute;
  z-index: 20;
  width:5%;
  top: 35%;
  left: 30%;
  @media (max-width: 768px) {
    width: 15%;
    top: 10%;
    left: 10%;
    opacity: 0;
    animation: ${fadeIn} 0.6s ease-in 1s forwards;
  }
`;

export const MediumPlanetWrap = styled.div`
  position: absolute;
  z-index: 20;
  width: 20%;
  bottom: 40%;
  right: 10%;
  @media (max-width: 768px) {
    width: 80%;
    top: 15%;
    right: -43%;
    transform: rotate(80deg) translateY(-60%);
    animation: ${showPlanet} 0.7s ease-in 0.3s forwards;
  }
`;

export const BottomWrap = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-2%);
  z-index: 20;
  @media (max-width: 768px) {
    flex-direction: column;
    transform: translateX(0);
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: 5%;
    transform: translateX(0);
  }
`

export const CatWrap = styled.div`
  z-index: 20;
  width: 10%;
  @media (max-width: 1440px) {
    width:8%;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 20%;
    margin-bottom: 10%;
  }
`;

export const TextWrap = styled.div`
  z-index: 20;
  opacity: 0;
  transform: translate(-10%);
  animation: ${fadeInText} 1s ease-in-out 0.6s forwards;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    top: auto;
    text-align: left;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: block;
  }
`

export const Title = styled.h1`
  font-size: 2.2vw;
  font-weight: 700;
  line-height: 1.5;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_3vh};
    margin-bottom: 1rem;
  }

`;

export const Desc = styled.p`
  font-size: 1.3vw;
  line-height: 1.5;
  margin-left: -3rem;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_14};
    margin-left: 0;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(140deg, rgba(0, 0, 0, 0.9) 3%, transparent 20%, transparent 90%, #101010 100%);
  background-color: transparent;
  top: 0;
`;
