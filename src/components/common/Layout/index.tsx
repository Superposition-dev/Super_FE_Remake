import React from 'react';
import * as S from './styles';
function Layout({ children, height }: { children: React.ReactNode; height: number }) {
  return (
    <S.Layout height={height}>
      <S.Background />
      <S.Cover />
      {children}
    </S.Layout>
  );
}

export default Layout;
