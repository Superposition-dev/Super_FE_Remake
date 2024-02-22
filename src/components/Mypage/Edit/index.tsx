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
import { deleteUser, getUserInfo, putEditUserInfo } from '@/api/user';
import { useRouter } from 'next/router';
import ResponseModal from '@/components/@Common/Modal/Response';

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
  const [error, setError] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const token = getCookie('accessToken');
  const router = useRouter();

  const { data } = useQuery<UserType>(['userInfo'], () => getUserInfo(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('userInfo');
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteUserMutate } = useMutation(deleteUser, {
    onSuccess: () => {
      onLink('/');
      removeCookie('accessToken', { path: '/' });
    },
  });

  const { mutate: putEditUserInfoMutate } = useMutation(putEditUserInfo, {
    onSuccess: (res) => {
      if (res && res.response.status == 409) {
        setError(true);
        setMessage('다른 사용자와 중복된 닉네임으로\n변경할 수 없어요.');
      } else {
        setIsEdit(false);
        setMessage('회원 정보 수정이 완료되었습니다.');
        onLink('/mypage');
      }
    },
  });

  const onEditUserInfo = () => {
    const body = {
      email: userInfo?.email,
      nickname: userInfo?.nickname,
      gender: userInfo?.gender ? userInfo.gender : null,
      birthYear: userInfo?.birthYear ? userInfo.birthYear : null,
    };

    putEditUserInfoMutate({ body: body, token: token });
  };

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
              data?.birthYear !== userInfo?.birthYear ||
              data?.gender !== userInfo?.gender ||
              (data?.nickname !== userInfo?.nickname &&
                userInfo?.nickname &&
                validateNickName(userInfo.nickname) === ValidateNickNameType.success)
                ? false
                : true
            }
            onClick={onEditUserInfo}
          >
            수정하기
          </S.EditButton>
          <S.ResignButton onClick={() => setOpen(true)}>회원 탈퇴</S.ResignButton>
        </S.ButtonWrap>
      </S.MyEditWrap>
      <Portal>
        <>
          {open ? (
            <ResignModal
              state={open}
              setState={setOpen}
              data={data}
              handler={() => deleteUserMutate(token)}
            ></ResignModal>
          ) : error ? (
            <ResponseModal state={error} setState={setError} message={message} cancel="확인" handler={undefined} />
          ) : !isEdit ? (
            <ResponseModal
              state={isEdit}
              setState={setIsEdit}
              message={message}
              cancel="닫기"
              handler={() => onLink('/mypage')}
            />
          ) : (
            <></>
          )}
        </>
      </Portal>
    </CommonWrapper>
  );
}

export default MyEditPage;
