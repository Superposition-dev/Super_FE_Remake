import React from 'react';
import * as S from './styles';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Layout>
      <S.Background />
      <S.Cover />
      {children}
    </S.Layout>
  );
}

export default Layout;
