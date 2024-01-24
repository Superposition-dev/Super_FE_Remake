import React from "react";
import * as S from "./styles";
import { RiKakaoTalkFill } from "react-icons/ri";
const LoginType: { [key: string]: string } = {
  kakao: "카카오로 시작하기",
  google: "구글로 시작하기",
  naver: "네이버로 시작하기",
  facebook: "페이스북으로 시작하기",
};

interface LoginProps {
  loginType: string;
  onClick: () => void;
}

const KakaoLogin = ({ loginType, onClick }: LoginProps) => {

  return<S.Button loginType={loginType} onClick={onClick}>
    <RiKakaoTalkFill size='26'/>
    {LoginType[loginType]}
    </S.Button>;

};

export default KakaoLogin;
