import { instance } from '@/api/instance'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import * as S from './styles'
import { setCookie } from '@/util/cookie'
const KakaoMiddleware = () => {
  const router = useRouter()
  const {code, error} = router.query
  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try{
        const res = await instance.get(`/users/login/kakao?code=${code}`)
        console.log(res.data.token)
        if(res.data?.statusCodeValue
          === 303){
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.body))
          router.push('/signup')
          return
        }
        setCookie('accessToken', res.data.token.accessToken,{path: '/'})
        setCookie('refreshToken', res.data.token.refreshToken,{path: '/'})
        console.log(res.data.token.accessToken, res.data.token.refreshToken)
        router.push('/')
      
      }catch(e:any){
        console.log(e)
        if(e.response?.status === 303){
          sessionStorage.setItem('userInfo', JSON.stringify(e.response.data))
          router.push('/signup')
          return
      }
    }
    }
  ,[router])

  useEffect(() => {
    if(code){
      loginHandler(code)
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

export default KakaoMiddleware