import styled from '@emotion/styled';
import Image from 'next/image';

export const SecondeAboutSection = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.flexRow};
  padding: 5rem 2rem;
  overflow: hidden;
  margin: 0 auto;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QrCodeWrap = styled.div`
  width: 100%;
  height: 43rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: linear-gradient(104deg, rgba(254, 254, 254, 0.25) 22.14%, rgba(254, 254, 254, 0.1) 73.73%);
  box-shadow: 0px 8px 34px 0px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    border-radius: 8px;
    height: auto;
  }
  @media (max-width: 429px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 390px) {
    margin: 1rem 0 2rem;
  }
  @media (max-width: 385px) {
    margin-bottom: 1rem;
  }
`;

export const QrContentWrap = styled.div`
  font-size: 2.4rem;
  line-height: 1.5;
  text-align: center;
  h2{
    font-weight: 600;
  }
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.medium_14};
    text-align: left;
  }
`;

export const QrIconWrap = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  @media (max-width: 768px) {
  width: 10.5vh;
  height: 10.5vh;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexColumn};
`;

export const ContentTitle = styled.h3`
  font-size: 3.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_20};
  }
`;

export const ContentDesc = styled.p`
  width: 90%;
  font-size: 2rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  word-break: keep-all;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_14};
  }
`;

export const ContentText = styled.p`
  width: 70%;
  font-size: 2rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  word-break: keep-all;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_10};
  }
`;

export const DetailImageWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  position: relative;
  margin: 2.3rem 0 3rem;
  display: flex;
  width: 59rem;
  height: 39rem;
  @media (max-width: 429px) {
    width: 27.8rem;
    height: 19.4rem;
  }
`;

export const TextWrap = styled.div`
  margin-top: 1rem;
`;

export const TextStrong = styled.strong`
  ${({ theme }) => theme.font.bold_12};
  color: ${({ theme }) => theme.colors.gray};
  word-break: keep-all;
`;

export const Text = styled.p`
  width: 80%;
  ${({ theme }) => theme.font.regular_12};
  color: #797979;
`;
