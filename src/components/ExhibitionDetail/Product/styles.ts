import styled from '@emotion/styled';
import Image from 'next/image';

export const ProductWrap = styled.div`
  width: 20vw;
  @media (max-width: 768px) {
    width: 42vw;
  }
`;

export const ProductImageWrap = styled.div`
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;
export const ProductImage = styled(Image)`
  width: 100%;
  height: auto !important;
  object-fit: cover;
  object-position: center;
`;

export const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: transparent;
  border-radius: 8px;
  border: 4px solid rgba(255, 255, 255, 0.2);
`;

export const ProductInfoWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.medium_14};
`;

export const Tags = styled.div`
  display: flex;
  ${({ theme }) => theme.flex.regular_12};
  color: ${({ theme }) => theme.colors.dark_gray};
  margin-top: 0.5rem;
`;

export const Tag = styled.p`
  word-break: keep-all;
  white-space: nowrap;
  margin-right: 0.5rem;
`;

export const ProductTitle = styled.div``;

export const ProductAuthor = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;
