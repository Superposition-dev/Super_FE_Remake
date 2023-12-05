import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import Layout from '@/components/common/Layout';
import Header from '@/components/common/Header';
import { useVh } from '@/hook/useVh';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const vh = useVh();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout height={vh}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <title>슈퍼 포지션 (SuperPosition)</title>
            </Head>
            <Component {...pageProps} />
          </Hydrate>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
