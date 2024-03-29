import { getReToken, refreshTest } from '@/api/test'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const TestComponents = () => {

  const [makeToken, setMakeToken] = useState(false)
  const [reissueToken, setReissueToken] = useState(false)
  const {data:token} = useQuery('token', refreshTest, {
    enabled: makeToken,
    onSuccess: (data) => {
      setMakeToken(false)
    },
    onError: (e) => {
      setMakeToken(false)
    }
  })
  const {data:reToken} = useQuery('reToken', getReToken, {
    enabled: reissueToken,
    onSuccess: (data) => {
      setReissueToken(false)
    },
    onError: (e) => {
      setReissueToken(false)
    }
  })
  return (
    <div style={{position:'relative', top:'50%',left:'50%'}}>
      <button style={{backgroundColor:'white',marginRight:'10px', cursor:'pointer'}} onClick={()=>setMakeToken(true)}>토큰생성</button>
      <button style={{backgroundColor:'white',cursor:'pointer'}} onClick={()=>setReissueToken(true)}>토큰재발급</button>
    </div>
  )
}

export default TestComponents