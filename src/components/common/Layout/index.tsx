import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
function Layout({ children, height }: { children: React.ReactNode; height: number }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <S.Layout path={pathname} height={height}>
      <S.Background />
      <S.Cover />
      {children}
    </S.Layout>
  );
}

export default Layout;
