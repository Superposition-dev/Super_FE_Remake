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

export const TitleWrap = styled.div`
  margin-top: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding-bottom: 4rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  ${({ theme }) => theme.font.medium_14};
  color: ${({ theme }) => theme.colors.white};
`

export const LogoWrap = styled.div`
  position: relative;
  width: 25.2rem;
  height: 3.4rem;
`

export const ContactUsWrap = styled.div`
  margin-top: 3rem;
  ${({ theme }) => theme.flex.flexColumn};
  gap: 2rem;
`

export const ContactUsTitle = styled.h2`
  ${({ theme }) => theme.font.bold_20};
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
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
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

export const InfoWrap = styled.div``

export const Text = styled.p`
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.white};
`