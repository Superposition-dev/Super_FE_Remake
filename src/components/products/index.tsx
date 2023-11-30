import React from 'react';
import * as S from './styles';
import Author from './Author';
import Search from '../common/Search';
import Product from './Product';
import CommonTitle from '../common/Title';

const titleData = {
  title: '성수 포지션',
  subTitle: '슈퍼포지션 두 번째 기획 전시',
};

function ProductsPage() {
  return (
    <S.ProductsContainer>
      <CommonTitle data={titleData} />
      <S.Authors>
        <Author />
        <Author />
        <Author />
        <Author />
      </S.Authors>
      <Search />
      <S.Products column={2} gap={20} align={'justify'} defaultDirection={'end'}>
        <Product img={'https://i.pinimg.com/474x/c6/a3/f2/c6a3f2bbe8537fed334798f0c55876ec.jpg'} />
        <Product img={'https://i.pinimg.com/474x/be/79/5c/be795c0014a3b986abe0642e66734819.jpg'} />
        <Product img={'https://i.pinimg.com/474x/47/c2/02/47c202ad23b674a2eb0778c6af757f0c.jpg'} />
        <Product img={'https://i.pinimg.com/474x/e2/a0/a0/e2a0a0eccb23ab73e73d725c1737ae5e.jpg'} />
        <Product img={'https://i.pinimg.com/474x/c6/a3/f2/c6a3f2bbe8537fed334798f0c55876ec.jpg'} />
        <Product img={'https://i.pinimg.com/474x/be/79/5c/be795c0014a3b986abe0642e66734819.jpg'} />
        <Product img={'https://i.pinimg.com/474x/47/c2/02/47c202ad23b674a2eb0778c6af757f0c.jpg'} />
        <Product img={'https://i.pinimg.com/474x/e2/a0/a0/e2a0a0eccb23ab73e73d725c1737ae5e.jpg'} />
      </S.Products>
    </S.ProductsContainer>
  );
}

export default ProductsPage;
