import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import Layout from '@/components/common/Layout';
import Header from '@/components/common/Header';
import { useVh } from '@/hook/useVh';

export default function App({ Component, pageProps }: AppProps) {
  const vh = useVh();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Layout height={vh}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
