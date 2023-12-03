import styled from '@emotion/styled';
import { IoSearch } from 'react-icons/io5';
export const SearchWrap = styled.form`
  width: 100%;
  height: 3.4rem;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  padding: 0 1rem 0 3.5rem;
  ${({ theme }) => theme.font.regular_14};
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark_gray};
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SearchIcon = styled(IoSearch)`
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.white};
`;
