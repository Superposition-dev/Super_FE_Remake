import * as S from './styles';
import { useEffect, useState } from 'react';
import { getMyFollow, getMyLike } from '@/api/user';
import { useIsMobile } from '@/hook/useView';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getCookie } from '@/util/cookie';
import Product from '../ExhibitionDetail/Product';
import { AuthorsProps } from '@/interface/authors';
import Author from '../Authors/Author';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');
  await queryClient.prefetchQuery('myFollow', () => getMyLike(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function MyFollowPage() {
  const [maxScroll, setMaxScroll] = useState(0);
  const mobile = useIsMobile();
  const token = getCookie('accessToken');

  const { data: authors } = useQuery(['myFollow'], () => getMyFollow(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('myFollow');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setMaxScroll(scrollHeight);
  }, [authors]);

  return (
    <S.MyFollowWrap>
      <S.TitleWrap>
        <S.Title>팔로우 작가</S.Title>
      </S.TitleWrap>
      {authors?.authors.length !== 0 && authors?.authors !== undefined ? (
        <S.AuthorsWrap>
          {authors.authors?.map((author: AuthorsProps, index: number) => (
            <Author key={index} data={author} />
          ))}
        </S.AuthorsWrap>
      ) : (
        <S.NoResultWrap>
          <S.CatImage src="/images/cat-logo.png" alt="기본 이미지" />
          <S.NoResult>{'아직 팔로우한 작가가 없어요.\n마음에 드는 작가에 ❤️를 남겨보세요!'}</S.NoResult>
        </S.NoResultWrap>
      )}
    </S.MyFollowWrap>
  );
}

export default MyFollowPage;
