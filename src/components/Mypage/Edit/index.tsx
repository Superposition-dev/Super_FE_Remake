import React, { useEffect, useState } from 'react';
import * as S from './styles';
import CommonWrapper from '@/components/@Common/Wrap';
import CommonUserImage from '@/components/@Common/Image';
import UserInfo from './Info';
import { UserInfoType } from '@/interface/user';
import { validateNickName } from '@/util/utils';
import { ValidateNickNameType } from '@/interface/signup';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getMe } from '@/api/auth';
import { getCookie } from '@/util/cookie';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');
  await queryClient.prefetchQuery('userInfo', () => getMe(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function MyEditPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const token = getCookie('accessToken');

  const { data } = useQuery(['userInfo'], () => getMe(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('exhibitions');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const onEditUserInfo = () => {};

  useEffect(() => {
    // setUserInfo(data);
    setUserInfo({
      userId: 1,
      name: '김규리',
      nickname: '규리4418',
      email: 'aliyah521@naver.com',
      birthYear: '2000',
      gender: undefined,
      profile: 'http://k.kakaocdn.net/dn/OwFk5/btsDjWT7KPk/AsNXO08jJ6Zr1KaMY20NJk/img_640x640.jpg',
    });
  }, []);

  return (
    <CommonWrapper>
      <S.MyEditWrap>
        <S.MyEditTopWrap>
          <CommonUserImage userInfo={userInfo} setUserInfo={setUserInfo} />
        </S.MyEditTopWrap>
        <S.MyEditBottomWrap>
          <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} data={data} />
        </S.MyEditBottomWrap>
        <S.ButtonWrap>
          <S.EditButton
            disabled={
              userInfo?.nickname && validateNickName(userInfo.nickname) === ValidateNickNameType.success ? false : true
            }
            onClick={onEditUserInfo}
          >
            수정하기
          </S.EditButton>
          <S.CancelButton>회원 탈퇴</S.CancelButton>
        </S.ButtonWrap>
      </S.MyEditWrap>
    </CommonWrapper>
  );
}

export default MyEditPage;
