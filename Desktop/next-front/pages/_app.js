// import '@/styles/globals.css'
// import '@/styles/product-table.css'
import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/hooks/use-cart'
import { MyAuthContextProvider } from '@/contexts/my-auth-context'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  // 若有兩個 provider 可往外繼續包裹
  return (
    <MyAuthContextProvider>
      <CartProvider>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </CartProvider>
    </MyAuthContextProvider>
  )
}
