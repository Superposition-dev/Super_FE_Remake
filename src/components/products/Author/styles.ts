import styled from '@emotion/styled';

export const AuthorWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorImage = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const AuthorName = styled.div`
  ${({ theme }) => theme.font.medium_14};
  margin-top: 0.5rem;
`;
