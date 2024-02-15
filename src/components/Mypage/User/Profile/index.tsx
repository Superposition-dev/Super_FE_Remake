import { customNullImg } from '@/util/utils';
import * as S from './styles';
import { ProfileProps } from '@/interface/user';
import { useRouter } from 'next/router';

function Profile(props: ProfileProps) {
  const { userInfo } = props;
  const router = useRouter();

  const onLink = () => {
    router.push('/mypage/edit');
  };

  return (
    userInfo && (
      <S.ProfileWrap>
        <S.Profile>
          <S.ImageWrap>
            <S.Image src={customNullImg(userInfo.profile)} />
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
        <S.EditButton onClick={onLink}>수정</S.EditButton>
      </S.ProfileWrap>
    )
  );
}

export default Profile;
