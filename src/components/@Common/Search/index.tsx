import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getSearchProducts } from '@/api/product';
import { getSearchAuthors } from '@/api/author';

function Search({ setData }: { setData: Function }) {
  const router = useRouter();
  const pathname = router.pathname;
  const searchRef = useRef<HTMLFormElement>(null);

  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true);
  }, []);

  const isProductsPath = useMemo(() => pathname.includes('exhibition'), [pathname]);
  const isAuthorsPath = useMemo(() => pathname === '/authors', [pathname]);

  useQuery('searchProducts', () => getSearchProducts(searchValue), {
    enabled: isProductsPath && search,
    onSuccess: (data) => {
      setData(data);
      setSearch(false);
    },
    onError: () => {
      setData('');
      setSearch(false);
    },
  });

  useQuery('searchAuthors', () => getSearchAuthors(searchValue), {
    enabled: isAuthorsPath && search,
    onSuccess: (data) => {
      setData(data);
      setSearch(false);
    },
    onError: () => {
      setData('');
      setSearch(false);
    },
  });

  const onSearchDelete = useCallback(() => {
    setSearchValue('');
    setData([]);
  }, []);

  return (
    <S.SearchWrap onSubmit={onSearch} ref={searchRef}>
      <S.SearchInputWrap>
        <S.SearchIcon />
        <S.SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={isProductsPath ? '작품 제목, 작가 이름을 입력하세요.' : '작가 이름을 입력하세요.'}
        />
        {searchValue.length !== 0 && <S.DeleteIcon onClick={onSearchDelete} />}
      </S.SearchInputWrap>
    </S.SearchWrap>
  );
}

export default React.memo(Search);
