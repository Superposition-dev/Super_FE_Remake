import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { ExhibitionListProps, ExhibitionType, FilterType } from '@/interface/exhibition';
import Exhibition from '../Item';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getExhibitionList } from '@/api/exhibition';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('exhibitionList', getExhibitionList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function ExhibitionList(props: ExhibitionListProps) {
  const { type } = props;
  const [filterList, setFilterList] = useState<ExhibitionType[]>();

  const { data: exhibitionList } = useQuery(['exhibitionList'], getExhibitionList, {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('exhibitionList');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (type === undefined || exhibitionList === undefined) return;

    const filterList = exhibitionList?.filter((item) =>
      type === FilterType.all ? item : type === FilterType.progress ? item.isDisplay : !item.isDisplay,
    );
    setFilterList(filterList);
  }, [type, exhibitionList]);

  return (
    <S.ExhibitionList>
      {filterList?.map((exhibition: ExhibitionType) => {
        return <Exhibition key={exhibition.exbihitionNum} exhibition={exhibition} />;
      })}
    </S.ExhibitionList>
  );
}

export default ExhibitionList;
