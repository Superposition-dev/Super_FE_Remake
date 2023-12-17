import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SlideWrap = styled.div`
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: calc((30vw * 20 + 10px * 2) * 2 + 10px);
  }
  @media (max-width: 429px) {
    width: calc((28.5vw * 20 + 10px * 2) * 2 + 10px);
  }
`;

export const SlideItems = styled(motion.div)`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    width: calc(30vw * 20 + 10px * 2);
  }
  @media (max-width: 429px) {
    width: calc(28.5vw * 20 + 10px * 2);
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
    height: 24vw;
  }
  @media (max-width: 429px) {
    width: 12.5vh;
    height: 10vh;
  }
  @media (max-width: 376px) {
    width: 9.5vh;
    height: 7vh;
  }
`;
