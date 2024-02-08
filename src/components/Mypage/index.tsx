import React, { useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';

function Mypage() {
  const [user, setUser] = useState<boolean>(true);
  const [author, setAuthor] = useState<boolean>(false);

  const handleDivision = () => {
    setUser(!user);
    setAuthor(!author);
  };

  return (
    <CommonWrapper>
      <S.MypageWrap>
        <S.MypageTopWrap>
          <S.DivisionWrap>
            <S.Division active={user} onClick={handleDivision}>
              일반
            </S.Division>
            <S.Division active={author} onClick={handleDivision}>
              작가
            </S.Division>
          </S.DivisionWrap>
        </S.MypageTopWrap>
      </S.MypageWrap>
    </CommonWrapper>
  );
}

export default Mypage;
