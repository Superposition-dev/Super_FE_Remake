import React, { useEffect, useState } from 'react';
import * as S from './styles';
import CommonWrapper from '@/components/@Common/Wrap';
import CommonUserImage from '@/components/@Common/Image';
import UserInfo from './Info';
import Portal from '@/components/@Common/Modal';
import ResignModal from '@/components/@Common/Modal/Resign';
import { UserInfoType, UserType } from '@/interface/user';
import { validateNickName } from '@/util/utils';
import { ValidateNickNameType } from '@/interface/common';
import { QueryClient, dehydrate, useMutation, useQuery } from 'react-query';
import { getCookie, removeCookie } from '@/util/cookie';
import { deleteUser, getUserInfo } from '@/api/user';
import { useRouter } from 'next/router';

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

function MyEditPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [open, setOpen] = useState<boolean>(false);
  const token = getCookie('accessToken');
  const router = useRouter();

  const { data } = useQuery<UserType>(['userInfo'], () => getUserInfo(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userInfo');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const { mutate: deleteUserMutate } = useMutation(deleteUser, {
    onSuccess: () => {
      onLink('/');
      removeCookie('accessToken', { path: '/' });
    },
  });

  const onEditUserInfo = () => {};

  const onLink = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    setUserInfo(data);
  }, [data]);

  return (
    <CommonWrapper>
      <S.MyEditWrap>
        <S.MyEditTopWrap>
          <CommonUserImage userInfo={userInfo} setUserInfo={setUserInfo} data={data} />
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
          <S.ResignButton onClick={() => setOpen(true)}>회원 탈퇴</S.ResignButton>
        </S.ButtonWrap>
      </S.MyEditWrap>
      <Portal>
        {open ? (
          <ResignModal
            state={open}
            setState={setOpen}
            data={data}
            handler={() => deleteUserMutate(token)}
          ></ResignModal>
        ) : (
          <></>
        )}
      </Portal>
    </CommonWrapper>
  );
}

export default MyEditPage;
