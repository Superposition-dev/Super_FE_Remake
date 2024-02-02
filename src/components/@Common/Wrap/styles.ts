import styled from '@emotion/styled';

export const Wrapper = styled.div<{ transparent: boolean }>`
  width: 100%;
  height: 100%;
  padding: 5rem 2rem 2rem;
  background-color: ${({ theme, transparent }) => (transparent ? transparent : theme.colors.black)};
`;
