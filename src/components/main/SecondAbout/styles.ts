import styled from '@emotion/styled';
import Image from 'next/image';

export const SecondeAboutSection = styled.section`
  ${({ theme }) => theme.flex.flexCenter};
  flex-direction: column;
  padding: 6rem 2rem;
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
  margin-bottom: 2rem;
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
  gap: 0.6rem;
`;

export const ContentTitle = styled.h3`
  ${({ theme }) => theme.font.bold_20};
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
  width: 30vh;
  height: 20vh;
  position: relative;
  margin: 1.5rem 0;
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
