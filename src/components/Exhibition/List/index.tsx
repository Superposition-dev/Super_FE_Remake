import React from 'react';
import * as S from './styles';
import { ListProps } from '@/interface/exhibition';

function List(props: ListProps) {
  const { type } = props;

  return <S.List>리스트</S.List>;
}

export default List;
