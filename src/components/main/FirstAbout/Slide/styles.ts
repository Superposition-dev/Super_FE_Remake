import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SlideWrap = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: calc((30vw * 12 + 14px * 2) * 2 + 14px);
  }
  @media (max-width: 411px) {
    width: calc((21vw * 12 + 14px * 2) * 2 + 14px);
  }
  @media (max-width: 376px) {
    width: calc((18vw * 12 + 14px * 2) * 2 + 14px);
  }
`;

export const SlideItems = styled(motion.div)`
  display: flex;
  gap: 14px;
  @media (max-width: 768px) {
    width: calc(30vw * 12 + 14px * 2);
  }
  @media (max-width: 411px) {
    width: calc(21vw * 12 + 14px * 2);
  }
  @media (max-width: 376px) {
    width: calc(18vw * 12 + 14px * 2);
  }
`;

export const SlideItem = styled(motion.div)`
  border-radius: 60% 40% 60% 40%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 30vw;
    height: 12vh;
  }
  @media (max-width: 411px) {
    width: 21vw;
    height: 8vh;
  }
  @media (max-width: 376px) {
    width: 18vw;
    height: 7vh;
  }
`;
