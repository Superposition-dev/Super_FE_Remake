import React from 'react'
import * as S from './styles'
import Image from 'next/image'
function Footer() {

  const year = new Date().getFullYear()

  return (
    <S.FooterWrap>
      <S.TitleWrap>
        <S.Title>예술과 공간을 잇는 새로운 우주</S.Title>
        <S.LogoWrap>
          <Image src='/images/whiteLogo.webp' alt='logo' fill></Image>
        </S.LogoWrap>
        <S.ContactUsWrap>
          <S.ContactUsTitle>CONTACT US</S.ContactUsTitle>
          <S.LinkWrap style={{alignItems:'start'}}>
            <S.InstaIcon/>
            <S.Links>
              <S.LinkText href={'https://instagram.com/superposition.official?igshid=MzMyNGUyNmU2YQ=='}>슈퍼포지션 오피셜</S.LinkText>
              <S.LinkText href={'https://www.instagram.com/superposition_for_sale?igshid=OGQ5ZDc2ODk2ZA=='}>작품 판매 계정</S.LinkText>
            </S.Links>
          </S.LinkWrap>
          <S.LinkWrap>
            <S.LinkIcon/>
              <S.LinkText href={'https://instagram.com/superposition.official?igshid=MzMyNGUyNmU2YQ=='}>파트너 작가 신청</S.LinkText>
          </S.LinkWrap>
          <S.LinkWrap>
            <S.MailIcon/>
              <S.LinkText href='mailto:superposition.place@gmail.com'>superposition.place@gmail.com</S.LinkText>
          </S.LinkWrap>
        </S.ContactUsWrap>
      </S.TitleWrap>
      <S.InfoWrap>
        <S.Text>주식회사 슈퍼포지션 | 대표 : 이재원</S.Text>
        <S.Text>주소 : 경상북도 문경시 새동네길 3, 2층(모전동)</S.Text>
        <S.Text>사업자 번호 : 864-81-03147</S.Text>
      </S.InfoWrap>
      <S.SponsorWrap>
        <S.Text>후원 및 협업사</S.Text>
        <S.SponsorImage>
        <Image src='/images/sponsorLogo.webp' alt='sponsor' fill/>
        </S.SponsorImage>
      </S.SponsorWrap>
      <S.CopyRightWrap>
        <S.Text>ⓒ {year} SUPERPOSITION. ALL RIGHTS RESERVED.</S.Text>
      </S.CopyRightWrap>
    </S.FooterWrap>
  )
}

export default Footer