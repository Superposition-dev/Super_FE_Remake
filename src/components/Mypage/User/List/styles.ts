import styled from '@emotion/styled';
import { whiteShadowLight } from '@/styles/@common';
import { BiNews } from 'react-icons/bi';
import { TbMessage2 } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';

export const ListWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 1.5rem;
  width: 100%;
  padding: 1.75rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${whiteShadowLight} 5s infinite;
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.5rem;
  width: 100%;
`;

export const Title = styled.div`
  ${({ theme }) => theme.font.bold_14};
  color: ${({ theme }) => theme.colors.dark_gray};
`;

export const InnerList = styled.div<{ isDivided: boolean }>`
  ${({ theme }) => theme.flex.flexColumn};
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: ${({ theme, isDivided }) => (isDivided ? `1px solid ${theme.colors.dark_gray}` : '')};
`;

export const Item = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.25rem 0;
`;

export const Writing = styled(BiNews)`
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Message = styled(TbMessage2)`
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Heart = styled(FiHeart)`
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.white};
`;
