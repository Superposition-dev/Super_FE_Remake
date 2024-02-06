import { getProduct, getProducts, getQrProduct } from '@/api/product';
import ProductDetail from '@/components/ProductDetail';
import { ProductProps } from '@/interface/product';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

export async function getStaticPaths() {
  const data = await getProducts();
  const paths = data.map((product: ProductProps) => {
    return {
      params: { id: product.productId.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const data = await getProduct(params.id);
  return {
    props: {
      data,
    },
  };
}

function ProductDetailPage({ data }: any) {
  const { query } = useRouter();
  useQuery('qrProduct', () => getQrProduct(query.id as string), {
    enabled: !!query.isQr,
    onSuccess: (qrData) => {
      data = qrData;
      console.log('success');
    },
    onError: () => {
      console.log('error');
    },
  });
  return <ProductDetail data={data} />;
}

export default ProductDetailPage;
