import * as S from './styles';
import { getUserFollow } from '@/api/user';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getCookie } from '@/util/cookie';
import { AuthorsProps } from '@/interface/authors';
import Author from '../../Authors/Author';

function MyFollowPage() {
  const token = getCookie('accessToken');

  const { data: authors } = useQuery(['userFollow'], () => getUserFollow(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userFollow');
    },
    refetchOnWindowFocus: false,
  });

  return (
    <S.MyFollowWrap>
      <S.TitleWrap>
        <S.Title>팔로우 작가</S.Title>
      </S.TitleWrap>
      {authors !== '' && authors !== undefined && authors.length !== 0 ? (
        <S.AuthorsWrap>
          {authors?.map((author: AuthorsProps, index: number) => (
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
