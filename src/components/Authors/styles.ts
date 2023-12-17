import styled from '@emotion/styled';

export const AuthorsContainer = styled.div`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthorsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
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
