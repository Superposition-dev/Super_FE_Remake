import React, { useMemo } from 'react';
import * as S from './styles';
import CommonTitle from '../common/Title';
import Search from '../common/Search';
import Author from './Author';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getAuthors } from '@/api/authors';
import { AuthorsProps } from '@/interface/authors';
import { ARITST_TITLE } from '@/constants/title';



export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('authors', getAuthors);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function Authors() {
  const { data: authorsData } = useQuery('authors', getAuthors, {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('authors');
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const [searchData, setSearchData] = React.useState<AuthorsProps[]>([]);
  const memoizedAuthorsData = useMemo(() => authorsData, [authorsData]);
  const memoizedSearchData = useMemo(() => searchData, [searchData]);

  return (
    <S.AuthorsContainer>
      <CommonTitle data={ARITST_TITLE} />
      <Search setData={setSearchData} /> {/* Placeholder for Search component */}
      <S.AuthorsWrap>
        {memoizedSearchData?.length === 0
          ? memoizedAuthorsData?.map((author: AuthorsProps, index: number) => <Author key={index} data={author} />)
          : memoizedSearchData?.map((author: AuthorsProps, index: number) => <Author key={index} data={author} />)}
        {searchData === undefined && <S.NoResult>검색 결과가 없습니다.</S.NoResult>}
      </S.AuthorsWrap>
    </S.AuthorsContainer>
  );
}

export default Authors;
