import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getExhibitionList } from '@/api/exhibition';
import { ExhibitionListProps, ExhibitionType, FilterType } from '@/interface/exhibition';
import Exhibition from '../Item';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('exhibitionList', () => getExhibitionList());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function ExhibitionList(props: ExhibitionListProps) {
  const { type } = props;
  const [filterList, setFilterList] = useState<ExhibitionType[]>();

  const { data: exhibitionList } = useQuery(['exhibitionList'], () => getExhibitionList(), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('exhibitionList');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (type === undefined || exhibitionList === undefined) return;

    const filterList = exhibitionList.data?.filter((item: ExhibitionType) =>
      type === FilterType.all
        ? item
        : type === FilterType.progress
        ? item.status === '전시중'
        : item.status === '전시 종료',
    );
    setFilterList(filterList);
  }, [type, exhibitionList]);

  console.log(exhibitionList);

  return (
    <S.ExhibitionList>
      {filterList?.map((exhibition: ExhibitionType) => {
        return <Exhibition key={exhibition.exhibitionId} exhibition={exhibition} />;
      })}
    </S.ExhibitionList>
  );
}

export default ExhibitionList;
