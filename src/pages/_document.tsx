import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SuperPosition" />
        <meta property="og:title" content="Superposition" />
        <meta
          property="og:description"
          content="슈퍼포지션은 예술과 공간이 함께 어우러져 상생할 수 있는 세상을 꿈 꿉니다."
        />
        <meta property="og:image" content="./images/supercat.png" />
        <meta property="og:url" content="https://spp-art.netlify.app/" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="SuperPosition (KR)" />
        <meta property="twitter:title" content="SuperPosition" />
        <meta
          property="twitter:description"
          content="슈퍼포지션은 예술과 공간이 함께 어우러져 상생할 수 있는 세상을 꿈 꿉니다."
        />
        <meta property="twitter:image" content="./images/supercat.png" />
        <meta property="twitter:url" content="https://spp-art.netlify.app/" />
        <meta name="description" content="슈퍼포지션은 예술과 공간이 함께 어우러져 상생할 수 있는 세상을 꿈 꿉니다." />
        <meta name="keywords" content="슈퍼포지션, SuperPosition, 예술, 공간, 상생, 전시회, 미술, 작품" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
