import React from 'react';
import * as S from './styles';
import Image from 'next/image';
function ScrollArrow() {
  return (
    <S.ArrowWrap>
      <Image src="/images/scroll_arrow.svg" alt="화살표" width={0} height={0} layout="responsive" />
    </S.ArrowWrap>
  );
}

export default ScrollArrow;
