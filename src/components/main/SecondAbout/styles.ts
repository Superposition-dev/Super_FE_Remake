import styled from '@emotion/styled';
import Image from 'next/image';

export const SecondeAboutSection = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  padding: 5rem 2rem;
  overflow: hidden;
`;

export const QrCodeWrap = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(104deg, rgba(254, 254, 254, 0.25) 22.14%, rgba(254, 254, 254, 0.1) 73.73%);
  box-shadow: 0px 8px 34px 0px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

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
  ${({ theme }) => theme.font.medium_14};
`;

export const QrIconWrap = styled.div`
  width: 10.5vh;
  height: 10.5vh;
  position: relative;
`;

export const ContentWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.flexColumn};
`;

export const ContentTitle = styled.h3`
  ${({ theme }) => theme.font.bold_20};
  margin-bottom: 1rem;
`;

export const ContentDesc = styled.p`
  width: 90%;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.regular_14};
  word-break: keep-all;
`;

export const ContentText = styled.p`
  width: 70%;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.bold_10};
  word-break: keep-all;
`;

export const DetailImageWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  position: relative;
  margin: 2.3rem 0;
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
