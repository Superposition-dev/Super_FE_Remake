import { instance } from '@/api/instance'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import * as S from './styles'
const KakaoMiddleware = () => {
  const router = useRouter()
  const {code, error} = router.query

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try{
        const res = await instance.get(`/auth/login/kakao?code=${code}`)
        console.log(res.data)
        if(res.data?.statusCodeValue
          === 303){
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.body))
          router.push('/signup')
          return
        }
      }catch(e:any){
        console.log(e.response)
          router.push('/404')
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