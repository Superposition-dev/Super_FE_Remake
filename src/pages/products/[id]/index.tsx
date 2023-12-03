import { getProduct, getProducts } from '@/api/products';
import ProductDetail from '@/components/productsDetail';
import { ProductProps } from '@/interface/product';
import React from 'react';

export async function getStaticPaths(){
  const data = await getProducts();
  const paths = data.map((product:ProductProps) => {
    return {
      params: { id: product.productId.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  }; 
}

export async function getStaticProps({ params }:any){
  const data = await getProduct(params.id);
  return {
    props: {
      data,
    },
  };
};

function ProductDetailPage({ data }:any) {
  return <ProductDetail data={data} />;
}

export default ProductDetailPage;
