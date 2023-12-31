import styled from '@emotion/styled';
import Image from 'next/image';

export const AuthorWrap = styled.div`
  width: 42vw;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
`;

export const AuthorImageWrap = styled.div`
  width: 100%;
  height: 52vw;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const AuthorImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 8px;
  border: 4px solid rgba(255, 255, 255, 0.2);
`;
export const AuthorName = styled.div`
  ${({ theme }) => theme.font.bold_14};
  margin-top: 0.6rem;
`;

export const AuthorInfo = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.font.regular_12};
`;

export const NowBox = styled.div`
  ${({ theme }) => theme.font.bold_14};
  width: 5rem;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.colors.light_purple};
  ${({ theme }) => theme.flex.flexCenter};
  text-align: center;
  position: absolute;
  top: 5%;
  right: 5%;
  border-radius: 5px;
`;
