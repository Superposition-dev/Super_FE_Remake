import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import Layout from '@/components/@Common/Layout';
import Header from '@/components/@Common/Header';
import { useVh } from '@/hook/useVh';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Floating from '@/components/@Common/Floating';
import Script from 'next/script';

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const vh = useVh();
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout height={vh}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <title>슈퍼 포지션 (SuperPosition)</title>
              <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
            </Head>
            <Component {...pageProps} />
          </Hydrate>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
