import React from 'react';
import * as S from './styles';
import CommonTitle from '../common/Title';
import Search from '../common/Search';
import Author from './Author';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getAuthors } from '@/api/authors';
import { AuthorsProps } from '@/interface/authors';

const titleData = {
  title: '파트너 작가',
  subTitle: '슈퍼포지션의 작가들을 소개합니다.',
};

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
  console.log(authorsData);

  return (
    <S.AuthorsContainer>
      <CommonTitle data={titleData} />
      <Search setData={setSearchData} /> {/* Placeholder for Search component */}
      <S.AuthorsWrap>
        {searchData.length===0?authorsData?.map((author: AuthorsProps, index: number) => (
          <Author key={index} data={author} />
        )):searchData.map((author: AuthorsProps, index: number) => (
          <Author key={index} data={author} />
        ))}
      </S.AuthorsWrap>
    </S.AuthorsContainer>
  );
}

export default Authors;
