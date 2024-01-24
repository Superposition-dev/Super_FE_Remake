import React, { useState } from 'react';
import * as S from './styles';
import CommonWrapper from '../@Common/Wrap';
import { FilterType } from '@/interface/exhibition';
import ExhibitionList from './List';

function ExhibitionPage() {
  const [type, setType] = useState<FilterType>(FilterType.all);

  const FILTER_TAB = [
    { type: FilterType.all, text: '전체' },
    { type: FilterType.progress, text: '전시 중' },
    { type: FilterType.end, text: '전시 종료' },
  ];

  const onSetFilter = (type: FilterType) => {
    setType(type);
  };

  return (
    <CommonWrapper>
      <S.ExhibitionWrap>
        <S.Title>
          전시
          <S.FilterWrap>
            {FILTER_TAB.map((item, index) => {
              return (
                <S.Filter
                  key={index}
                  active={item.type === type ? true : false}
                  onClick={() => {
                    onSetFilter(item.type);
                  }}
                >
                  {item.text}
                </S.Filter>
              );
            })}
          </S.FilterWrap>
        </S.Title>
        <ExhibitionList type={type} />
      </S.ExhibitionWrap>
    </CommonWrapper>
  );
}

export default ExhibitionPage;
