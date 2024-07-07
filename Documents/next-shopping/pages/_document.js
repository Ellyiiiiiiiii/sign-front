import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/swiper.bundle.css" />
        <script src="/assets/js/swiper.bundle.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/script.js" defer></script>
      </body>
    </Html>
  )
}
