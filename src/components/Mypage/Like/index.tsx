import * as S from './styles';
import { useEffect, useState } from 'react';
import { getUserLike } from '@/api/user';
import { useIsMobile } from '@/hook/useView';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { getCookie } from '@/util/cookie';
import Product from '../../ExhibitionDetail/Product';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const token = getCookie('accessToken');
  await queryClient.prefetchQuery('userLike', () => getUserLike(token));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function MyLikePage() {
  const [maxScroll, setMaxScroll] = useState(0);
  const mobile = useIsMobile();
  const token = getCookie('accessToken');

  const { data: products } = useQuery(['userLike'], () => getUserLike(token), {
    initialData: () => {
      const queryClient = new QueryClient();
      console.log('dd');
      return queryClient.getQueryData('userLike');
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setMaxScroll(scrollHeight);
  }, [products]);

  return (
    <S.MyLikeWrap>
      <S.TitleWrap>
        <S.Title>좋아요 작품</S.Title>
      </S.TitleWrap>
      {products?.products.length !== 0 && products?.products !== undefined ? (
        <S.ProductsWrap>
          <S.Products
            column={mobile ? 2 : 4}
            gap={16}
            align="justify"
            defaultDirection={'end'}
            observeChildren={true}
            useResizeObserver={true}
            maxScroll={maxScroll}
          >
            {products?.products?.map((product: any, index: number) => (
              <Product key={index} data={product} />
            ))}
          </S.Products>
        </S.ProductsWrap>
      ) : (
        <S.NoResultWrap>
          <S.CatImage src="/images/cat-logo.png" alt="기본 이미지" />
          <S.NoResult>{'아직 저장한 작품이 없어요.\n마음에 드는 작품에 ❤️를 남겨보세요!'}</S.NoResult>
        </S.NoResultWrap>
      )}
    </S.MyLikeWrap>
  );
}

export default MyLikePage;
