import styled from '@emotion/styled';
import { whiteShadowLight } from '@/styles/@common';
import { FiHeart } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';

export const TasteWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 1rem;
  width: 100%;
`;

export const Title = styled.div`
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.white};
`;

export const TasteButtonWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  width: 100%;
`;

export const TasteButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter};
  gap: 1rem;
  width: 48%;
  height: 4.25rem;
  ${({ theme }) => theme.font.bold_14};
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  animation: ${whiteShadowLight} 5s infinite;
`;

export const Heart = styled(FiHeart)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Bookmark = styled(FiBookmark)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
