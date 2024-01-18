import styled from '@emotion/styled';

export const Layout = styled.div<{ path: string; height: number }>`
  width: 100%;
  height: ${({ path, height }) => (path === '/' ? 100 * height + 'px' : '100vh')};
  position: relative;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/backImage.webp');
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

export const Main = styled.main`
  max-width: 1660px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  ${({ theme }) => theme.flex.flexColumn};
  @media (max-width: 768px) {
    padding: 0 1rem;

  }
`
