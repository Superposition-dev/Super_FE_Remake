import styled from '@emotion/styled';
import { IoSearch } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
export const SearchWrap = styled.form`
  width: 100%;
  height: 3.4rem;
  position: relative;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  padding: 0 1rem 0 3.5rem;
  ${({ theme }) => theme.font.regular_14};
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark_gray};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

export const DeleteIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;
