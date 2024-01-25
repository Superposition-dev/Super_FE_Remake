import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';

// 화살표 애니메이션
const updown = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
`;

export const ArrowWrap = styled.div`
    width: 2%;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: ${updown} 1s ease infinite;
    z-index: 2;
    @media (max-width: 768px) {
    width: 8%;
  }
`;
