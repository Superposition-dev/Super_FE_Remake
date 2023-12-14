import React, { useMemo, useState, useEffect } from 'react';
import * as S from './styles';
import Author from './Author';
import Search from '../common/Search';
import Product from './Product';
import CommonTitle from '../common/Title';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getMainAuthors } from '@/api/authors';
import { getProducts } from '@/api/products';
import { AuthorsProps } from '@/interface/authors';
import { MainProduct } from '@/interface/product';
const titleData = {
  title: '성수 포지션',
  subTitle: '슈퍼포지션 두 번째 기획 전시',
};
//
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('products', getProducts);
  await queryClient.prefetchQuery('mainAuthors', getMainAuthors);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function ProductsPage() {
  const { data: productsData } = useQuery('products', getProducts, {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('products');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const { data: authorsData } = useQuery('mainAuthos', getMainAuthors, {
    initialData: () => {
      const queryClient = new QueryClient();
      return queryClient.getQueryData('authors');
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const [searchData, setSearchData] = useState<MainProduct[]>([]);
  const [maxScroll, setMaxScroll] = useState(0);
  const memoizedProductsData = useMemo(() => productsData, [productsData]);
  const memoizedAuthorsData = useMemo(() => authorsData, [authorsData]);
  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setMaxScroll(scrollHeight);
  }, [productsData,searchData]);
  return (
    <S.ProductsContainer>
      <CommonTitle data={titleData} />
      <S.Authors>
        {memoizedAuthorsData?.map((author: AuthorsProps, index: number) => (
          <Author key={index} data={author} />
        ))}
      </S.Authors>
      <Search setData={setSearchData} />
      <S.Products
        column={2}
        gap={20}
        align={'justify'}
        defaultDirection={'end'}
        observeChildren={true}
        useResizeObserver={true}
        maxScroll={maxScroll}
      >
        {searchData?.length === 0
          ? memoizedProductsData?.map((product: MainProduct, index: number) => <Product key={index} data={product} />)
          : searchData?.map((product: MainProduct, index: number) => <Product key={index} data={product} />)}
      </S.Products>
      {searchData === undefined && <S.NoResult>검색 결과가 없습니다.</S.NoResult>}
    </S.ProductsContainer>
  );
}

export default ProductsPage;
