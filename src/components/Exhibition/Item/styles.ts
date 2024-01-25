import styled from '@emotion/styled';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCalendarOutline } from 'react-icons/io5';

export const ExhibitionWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  ${({ theme }) => theme.flex.flexCenter};
  justify-content: space-between;
  width: 100%;
  height: 14.5rem;
  min-height: 14.5rem;
  padding: 0 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 9rem;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_gray};
  overflow: hidden;
`;

export const CustomImage = styled(Image)`
  object-fit: cover;
`;

export const InnerWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  ${({ theme }) => theme.flex.flexCenter};
  justify-content: space-between;
  width: 70%;
  height: 100%;

  @media (max-width: 375px) {
    width: 68%;
  }
`;

export const InnerTopWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.5rem;
  width: 100%;
`;

export const Type = styled.span<{ isDisplay: boolean }>`
  width: fit-content;
  padding: 0.375rem 0.75rem;
  ${({ theme }) => theme.font.bold_10};
  ${({ theme }) => theme.colors.white};
  background-color: ${({ isDisplay, theme }) => (isDisplay ? theme.colors.purple : theme.colors.dark_gray)};
  color: ${({ isDisplay, theme }) => (isDisplay ? theme.colors.white : theme.colors.gray)};
  border-radius: 1rem;
`;

export const TitleWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.25rem;
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.font.bold_14};
  ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.layout.ellipsis};
`;

export const SubTitle = styled.h5`
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.layout.ellipsis};
`;

export const InnerBottomWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.375rem;
  width: 100%;
`;

export const DescWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 0.5rem;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  position: relative;
  top: -1px;
  width: 16px;
  height: 16px;
  ${({ theme }) => theme.colors.white};
`;

export const DateIcon = styled(IoCalendarOutline)`
  width: 16px;
  height: 16px;
  ${({ theme }) => theme.colors.white};
`;

export const Desc = styled.p`
  width: 85%;
  height: 100%;
  ${({ theme }) => theme.font.bold_10};
  ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.layout.ellipsis};
  vertical-align: middle;
`;
