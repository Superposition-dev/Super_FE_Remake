import { customNullImg } from '@/util/utils';
import * as S from './styles';
import { ProfileProps } from '@/interface/user';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { isValiableNickname } from '@/api/user';
import { useState } from 'react';
import { nicknameAtom } from '@/atoms/user';
import { useSetRecoilState } from 'recoil';
import { getCookie } from '@/util/cookie';

function Profile(props: ProfileProps) {
  const { userInfo } = props;
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const router = useRouter();
  const token = getCookie('accessToken');
  const setIsVaild = useSetRecoilState(nicknameAtom);

  useQuery('nickNameIsValid', () => isValiableNickname(token), {
    enabled: onEdit,
    onSuccess: (data) => {
      setIsVaild(data);
      setOnEdit(false);
      router.push('/mypage/edit');
    },
  });

  return (
    userInfo && (
      <S.ProfileWrap>
        <S.Profile>
          <S.ImageWrap>
            <S.Image src={customNullImg(userInfo ? userInfo.profile : '')} />
          </S.ImageWrap>
          <S.DescWrap>
            <S.NickName>{userInfo.nickname}</S.NickName>
            <S.EmailWrap>
              <S.KakaoWrap>
                <S.KakaoSymbol src="/images/kakaoSymbol.png" alt="카카오 이미지" />
              </S.KakaoWrap>
              <S.Email>{userInfo.email}</S.Email>
            </S.EmailWrap>
          </S.DescWrap>
        </S.Profile>
        <S.EditButton onClick={() => setOnEdit(true)}>수정</S.EditButton>
      </S.ProfileWrap>
    )
  );
}

export default Profile;
