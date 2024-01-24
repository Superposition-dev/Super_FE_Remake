import { instance } from '@/api/instance'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import * as S from './styles'
const Kakao = () => {
  const router = useRouter()
  const {code, error} = router.query

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try{
        const res = await instance.get(`/auth/login/kakao?code=${code}`)
        console.log(res.data)
        router.push('/')
      }catch(e:any){
        console.log(e.response)
        if(e.response?.status === 303){
          sessionStorage.setItem('kakaoInfo', JSON.stringify(e.response.data))
          router.push('/signup')
          return
        }else{
          router.push('/404')
        }      
      }
    }
  ,[router])

  useEffect(() => {
    if(code){
      loginHandler(code)
    }else if(error){
      router.push('/login')
    }
  },[loginHandler, code, error, router])

  return (
    <S.LoadingContainer>
      <S.LoadingWrap>
        로그인 중...
      </S.LoadingWrap>
    </S.LoadingContainer>
  )
}

export default Kakao