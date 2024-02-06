import React, { useMemo, useEffect, useState } from 'react';
import * as S from './styles';
import CommonTitle from '../@Common/Title';
import Search from '../@Common/Search';
import Author from './Author';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getAuthors } from '@/api/author';
import { AuthorsProps } from '@/interface/authors';
import { ARITST_TITLE } from '@/constants/title';
import Floating from '../@Common/Floating';

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('authors', getAuthors);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function AuthorsPage() {
  const { data: authorsData } = useQuery('authors', getAuthors, {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('authors');
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const [searchData, setSearchData] = useState<AuthorsProps[]>([]);
  const memoizedAuthorsData = useMemo(() => authorsData, [authorsData]);
  const memoizedSearchData = useMemo(() => searchData, [searchData]);

  return (
    <>
      <S.AuthorsContainer>
        <CommonTitle data={ARITST_TITLE} />
        <Search setData={setSearchData} />
        <S.AuthorsWrap>
          {memoizedSearchData?.length === 0
            ? memoizedAuthorsData?.map((author: AuthorsProps, index: number) => <Author key={index} data={author} />)
            : memoizedSearchData?.map((author: AuthorsProps, index: number) => <Author key={index} data={author} />)}
          {searchData === undefined && <S.NoResult>검색 결과가 없습니다.</S.NoResult>}
        </S.AuthorsWrap>
      </S.AuthorsContainer>
      <Floating title="작가 신청" src="/images/floatingImage.webp" />
    </>
  );
}

export default AuthorsPage;
