import React,{useState} from 'react';
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
  const [data, setData] = useState<AuthorsProps[]>([]);
  const {data: authorsData} = useQuery('authors', getAuthors,{
    onSuccess: (data) => {
      setData(data);
    },
  });
  console.log(data);
  return (
    <S.AuthorsContainer>
      <CommonTitle data={titleData} />
      <Search setData={setData} />
      <S.AuthorsWrap>
        {
          data?.map((author:AuthorsProps,index:number) => {
            return <Author key={index} data={author} />;
          })
        }
      </S.AuthorsWrap>
    </S.AuthorsContainer>
  );
}

export default Authors;
