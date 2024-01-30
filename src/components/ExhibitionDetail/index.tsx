import React from 'react';
import * as S from './styles';
import CommonTitle from '../@Common/Title';
import { CONCEPT } from '@/constants/title';

function ExhibitionDetailPage({ data }: { data: any }) {
  console.log(data);
  return (
    <S.ProductsContainer>
      <CommonTitle data={CONCEPT} />
      <S.Authors></S.Authors>
    </S.ProductsContainer>
  );
}

export default ExhibitionDetailPage;
