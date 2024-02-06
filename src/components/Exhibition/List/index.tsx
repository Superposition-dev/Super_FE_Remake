import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getExhibitions } from '@/api/exhibition';
import { ExhibitionsProps, ExhibitionType, FilterType } from '@/interface/exhibition';
import Exhibition from '../Item';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('exhibitions', () => getExhibitions());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Exhibitions(props: ExhibitionsProps) {
  const { type } = props;
  const [filterList, setFilterList] = useState<ExhibitionType[]>();

  const { data: exhibitions } = useQuery(['exhibitions'], () => getExhibitions(), {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('exhibitions');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (type === undefined || exhibitions === undefined) return;

    const filterList = exhibitions?.filter((item: ExhibitionType) =>
      type === FilterType.all
        ? item
        : type === FilterType.progress
        ? item.status === '전시중'
        : item.status === '전시 종료',
    );
    setFilterList(filterList);
  }, [type, exhibitions]);

  console.log(exhibitions);

  return (
    <S.Exhibitions>
      {filterList?.map((exhibition: ExhibitionType) => {
        return <Exhibition key={exhibition.exhibitionId} exhibition={exhibition} />;
      })}
    </S.Exhibitions>
  );
}

export default Exhibitions;
