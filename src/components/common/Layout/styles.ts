import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
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
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
