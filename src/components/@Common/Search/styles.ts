import styled from '@emotion/styled';
import { IoSearch } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
export const SearchWrap = styled.form`
  position: sticky;
  top: 5rem;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  overflow: hidden;
  z-index: 100;
`;

export const SearchInputWrap = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.dark_gray};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const SearchInput = styled.input`
  width: 92%;
  height: 100%;
  outline: none;
  ${({ theme }) => theme.font.regular_14};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SearchIcon = styled(IoSearch)`
  width: 2rem;
  height: 2rem;
`;

export const DeleteIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
`;
