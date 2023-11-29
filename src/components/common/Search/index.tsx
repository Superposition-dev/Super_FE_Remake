import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
function Search() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <S.SearchWrap>
      <S.SearchInput
        placeholder={pathname === '/products' ? '작품 제목, 작가 이름을 입력하세요.' : '작가 이름을 입력하세요'}
      />
      <S.SearchIcon />
    </S.SearchWrap>
  );
}

export default Search;
