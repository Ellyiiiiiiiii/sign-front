import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function SignLayout({
  title = '購物網站',
  pageName = '',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar pageName={pageName} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
