import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import KakaoLogin from './kakao';
const Login = () => {
  function kakaoLogin() {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  }

  return (
    <S.LoginContainer>
      <S.LoginWrap>
        <S.LogoImage>
          <Image src="/images/login_logo.webp" alt="로고" fill />
        </S.LogoImage>
        <S.LoginButtonWrap>
          <S.TextWrap>
            <S.SmallPlanetImage>
              <Image src="/images/small_planet.svg" alt="로고" fill />
            </S.SmallPlanetImage>
            새로운 우주를 꿈꿉니다.
          </S.TextWrap>
          <KakaoLogin loginType="kakao" onClick={kakaoLogin} />
          <S.Text>
            {'회원가입 시 '}
            <S.Span href={'https://cultured-perigee-cb1.notion.site/b4dfe70107b4458fb147febb4cbc88d7'} target="_blank">
              개인정보처리방침
            </S.Span>
            {'과 이용약관에\n동의하는 것으로 간주됩니다.'}
          </S.Text>
        </S.LoginButtonWrap>
      </S.LoginWrap>
    </S.LoginContainer>
  );
};

export default Login;
