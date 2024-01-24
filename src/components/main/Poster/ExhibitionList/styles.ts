import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const ExhibitionListWrap = styled.div`
  width: 62rem;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
