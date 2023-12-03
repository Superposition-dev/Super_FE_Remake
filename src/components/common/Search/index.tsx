import React, {useRef,useState} from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getSearchProducts } from '@/api/products';
import { getSearchAuthors } from '@/api/authors';
function Search({setData}:{setData:Function}) {
  const router = useRouter();
  const pathname = router.pathname;
  const [search, setSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  useQuery('searchProducts',()=>getSearchProducts(searchRef.current?.value as string),{enabled:pathname==='/products'&&search,onSuccess:(data)=>{
    setData(data);
    setSearch(false);
  }
  });
  useQuery('searchAuthors',()=>getSearchAuthors(searchRef.current?.value as string),{enabled:pathname==='/authors'&&search,onSuccess:(data)=>{
    setData(data);
    setSearch(false);
  }
  });
  const onSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true);
  }
  return (
    <S.SearchWrap onSubmit={onSearch}>
      <S.SearchInput
        ref={searchRef}
        placeholder={pathname === '/products' ? '작품 제목, 작가 이름을 입력하세요.' : '작가 이름을 입력하세요'}
      />
      <S.SearchIcon />
    </S.SearchWrap>
  );
}

export default Search;
