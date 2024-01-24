import styled from "@emotion/styled";

const bgColorSwitch = (loginType:string) => {
  switch (loginType) {
    case "kakao":
      return "#ffe500";
    case "google":
      return "#ffffff";
    case "naver":
      return "#1ec800";
    default:
      return "#ffffff";
  }
}

export const Button = styled.button<{loginType:string}>`
  width: 70%;
  height: 5rem;
  background-color: ${({loginType}) => bgColorSwitch(loginType)};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  ${({ theme }) => theme.font.bold_20};
  color : ${({loginType}) => loginType === "naver" ? "#ffffff" : "#000000"};
  @media (max-width: 768px) {
    width: 100%;
  }
`