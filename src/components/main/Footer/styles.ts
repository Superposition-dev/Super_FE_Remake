import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FaInstagram, FaLink } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export const FooterWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  padding:5rem 3rem 0;
`

export const FooterTopWrap = styled.div`
  max-width: 1200px;

  ${({ theme }) => theme.flex.flexRow};
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin: 5rem auto 3rem;
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 1rem auto 0;
  }
`

export const FooterCat = styled.div`
  position: relative;
  width: 60rem;
  height: 48rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const TitleWrap = styled.div`
  margin-top: 3rem;

  padding-bottom: 4rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.white};
`

export const LogoWrap = styled.div`
  position: relative;
  width: 48.6rem;
  height: 6.6rem;
  @media (max-width: 768px) {
      width: 25.2rem;
  height: 3.4rem;
  }
`

export const ContactUsWrap = styled.div`
  margin-top: 3rem;
  ${({ theme }) => theme.flex.flexColumn};
  gap: 2rem;
`

export const ContactUsTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 700; 
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.bold_20};

  }
`

export const LinkWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1rem;
  
`


export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const LinkText = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  `

const Icon = css`
  font-size: 2.4rem;
`

export const InstaIcon = styled(FaInstagram)`
  ${Icon};
`

export const LinkIcon = styled(FaLink)`
  ${Icon};
`

export const MailIcon = styled(IoMailOutline)`
  ${Icon};
`
export const Line = styled.div`
  width: 65%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 4rem auto 3rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`

export const FooterBottomWrap = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  ${({ theme }) => theme.flex.flexRow};
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  padding:0 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding:0;
  }
`

export const InfoWrap = styled.div`
  width: 100%;
`

export const Text = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-start;
  @media (max-width: 768px) {
    ${({ theme }) => theme.font.regular_12};
  }
`

export const SponsorWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SponsorImage = styled.div`
  position: relative;
  width: 43.6rem;
  height: 6.6rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 5rem;
    bottom: 0;
  }
`

export const CopyRightWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
    text-align: left;
  }
`