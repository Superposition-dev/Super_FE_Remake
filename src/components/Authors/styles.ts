import styled from '@emotion/styled';

export const AuthorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 7rem 1rem 2rem;
`;

export const AuthorsWrap = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  place-items: center;
  padding-top: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NoResult = styled.div`
  width: 100%;
  height: 40vh;
  ${({ theme }) => theme.font.bold_20};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
