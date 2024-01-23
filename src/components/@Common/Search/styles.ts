import styled from '@emotion/styled';
import { IoSearch } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
export const SearchWrap = styled.form`
  box-sizing: content-box;
  width: 100vw;
  height: 3.4rem;
  position: sticky;
  z-index: 100;
  top: 5rem;
  font-size: 1.6rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 90%;
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
  left: 3.2rem;
  transform: translateY(-50%);
`;

export const DeleteIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;
