import styled from '@emotion/styled';
import { VscSparkle } from 'react-icons/vsc';

export const FloatingWrap = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  ${({ theme }) => theme.flex.flexCenter}
  ${({ theme }) => theme.flex.flexColumn}
  gap: 0.25rem;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 100%;
  box-shadow: 0 4px 15px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const FloatingImageWrap = styled.div`
  position: relative;
  left: 0.2rem;
  ${({ theme }) => theme.flex.flexCenter}
`;

export const FloatingImage = styled(VscSparkle)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FloatingTitle = styled.span`
  ${({ theme }) => theme.font.bold_12};
`;
