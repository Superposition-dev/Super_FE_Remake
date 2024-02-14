import React from 'react';
import ExhibitionDetailPage from '@/components/ExhibitionDetail';
import { getExhibitions, getExhibition } from '@/api/exhibition';
import { ExhibitionType } from '@/interface/exhibition';

export async function getStaticPaths() {
  const exhibitionList = await getExhibitions();
  const paths = exhibitionList.map((item: ExhibitionType) => {
    return {
      params: { id: item.exhibitionId.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const data = await getExhibition(params.id as string);

  if (data) {
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

function ExhibitionDetail({ data }: any) {
  return data ? <ExhibitionDetailPage data={data} /> : <></>;
}

export default ExhibitionDetail;
