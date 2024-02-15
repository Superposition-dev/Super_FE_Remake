import React, { useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';
import Profile from './User/Profile';
import Taste from './User/Taste';
import List from './User/List';
import { getCookie } from '@/util/cookie';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { UserType } from '@/interface/user';
import { getUserInfo } from '@/api/user';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');
  await queryClient.prefetchQuery('userInfo', () => getUserInfo(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Mypage() {
  const [user, setUser] = useState<boolean>(true);
  const [author, setAuthor] = useState<boolean>(false);
  const token = getCookie('accessToken');

  const { data: userInfo } = useQuery<UserType>(['userInfo'], () => getUserInfo(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userInfo');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const handleDivision = () => {
    setUser(!user);
    setAuthor(!author);
  };

  return (
    <CommonWrapper>
      <S.MypageWrap>
        <S.MypageTopWrap>
          <S.DivisionWrap>
            <S.Division active={user} onClick={handleDivision}>
              일반
            </S.Division>
            <S.Division active={author} onClick={handleDivision}>
              작가
            </S.Division>
          </S.DivisionWrap>
        </S.MypageTopWrap>
        {user && (
          <>
            <Profile userInfo={userInfo} />
            <Taste />
            <List />
          </>
        )}
      </S.MypageWrap>
    </CommonWrapper>
  );
}

export default Mypage;
