import styled from '@emotion/styled';

export const Layout = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => 100 * height + 'px'};
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url('/images/background.webp');
  background-position: center;
  background-size: cover;
  position: fixed;
  z-index: -1;
  filter: grayscale(100);
`;

export const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
