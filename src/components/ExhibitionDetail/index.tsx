import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Author from './Author';
import Search from '../@Common/Search';
import Product from './Product';
import CommonTitle from '../@Common/Title';
import CommonWrapper from '../@Common/Wrap';
import { ExhibitionDetailProps } from '@/interface/exhibition';
import { ProductType } from '@/interface/product';
import { AuthorType } from '@/interface/authors';
import { useIsMobile } from '@/hook/useView';

function ExhibitionDetailPage({ data }: { data: ExhibitionDetailProps }) {
  const [searchData, setSearchData] = useState<ProductType[]>([]);
  const [maxScroll, setMaxScroll] = useState(0);
  const mobile = useIsMobile();

  const TITLE = {
    TITLE: data.title,
    SUBTITLE: data.subHeading,
  };

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setMaxScroll(scrollHeight);
  }, [data.productInfo, searchData]);

  console.log(maxScroll);

  return (
    <S.ExhibitionDetailWrap>
      <CommonTitle data={TITLE} />
      <S.Authors>
        {data.artistInfo?.map((author: AuthorType, index: number) => (
          <Author key={index} data={author} />
        ))}
      </S.Authors>
      <Search setData={setSearchData} />
      {/* <S.ExhibitionBodyWrap> */}
      <S.ProductsWrap>
        <S.Products
          column={mobile ? 2 : 4}
          gap={12}
          align="justify"
          defaultDirection={'end'}
          observeChildren={true}
          useResizeObserver={true}
          maxScroll={maxScroll}
        >
          {searchData?.length === 0
            ? data.productInfo?.map((product: ProductType, index: number) => <Product key={index} data={product} />)
            : searchData?.map((product: ProductType, index: number) => <Product key={index} data={product} />)}
        </S.Products>
      </S.ProductsWrap>
      {searchData === undefined && <S.NoResult>검색 결과가 없습니다.</S.NoResult>}
      {/* </S.ExhibitionBodyWrap> */}
    </S.ExhibitionDetailWrap>
  );
}

export default ExhibitionDetailPage;
