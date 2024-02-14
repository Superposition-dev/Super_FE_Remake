import { customNullImg } from '@/util/utils';
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/atoms/user';

function Profile() {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
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
      <S.EditButton>수정</S.EditButton>
    </S.ProfileWrap>
  );
}

export default Profile;
