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
        if(res.data?.statusCodeValue
          === 303){
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.body))
          router.push('/signup')
          return
        }
        setCookie('token', res.data.accessToken,{path: '/'})
        console.log(res.data.accessToken)
        router.push('/')
        

      }catch(e:any){
        console.log(e)
        if(e.response?.status === 303){
          console.log(e.response.data)
          sessionStorage.setItem('userInfo', JSON.stringify(e.response.data))
          router.push('/signup')
          return
      }
      router.push('/login')
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

export default KakaoMiddleware