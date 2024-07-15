import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '@/components/loader'

// 資料夾中的`[pid].js`檔案代表這個路由中，除了根(索引)路由，靜態路由(有名稱的)之外，都算這個檔案路由，例如`/product/123`
// 資料範例:
// [
//   {
//     "id": 1,
//     "picture": "https://via.placeholder.com/150",
//     "stock": 5,
//     "name": "iPhone 12 Pro",
//     "price": 25000,
//     "tags": "蘋果,大螢幕"
//   }
// ]

export default function Detail() {
  // 第1步: 宣告路由器
  // router.query: 物件值，裡面有包含pid屬性值
  // router.isReady: 布林值，一開始為false，如果改變為true代表此頁面已完成"水合作用"，才能得到query值
  const router = useRouter()
  // 宣告商品狀態
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    stock: 0,
    price: 0,
    tags: '',
    picture: '',
  })

  // 宣告一個載入的狀態信號值
  // 設定一開始進入此頁面就要向伺服器獲取資料，不出現初始值
  const [isLoading, setIsLoading] = useState(true)

  // 與伺服器fetch獲得資料
  const getProduct = async (pid) => {
    const url = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' + pid

    try {
      const res = await fetch(url)
      const data = await res.json()

      console.log(data)

      if (
        typeof data === 'object' &&
        data !== null &&
        !Array.isArray(data) &&
        data.id // 至少id要有值(非0)
      ) {
        setProduct(data)
        // 關閉載入動畫，1.5再關閉
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式1: 用於除錯、紀錄
  useEffect(() => {
    console.log('render', router.query)
  })

  // 第2步: 用useEffect監聽router.isReady變動
  // 樣式3: didMount+didUpdate
  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query
      console.log(router.query)
      // 向伺服器要求資料
      getProduct(router.query.pid)
    }
  }, [router.isReady])

  return (
  <>
    <h1>商品詳細頁</h1>
    <hr />
    {/* 用isLoading進行條件式渲染，決定呈現的是載入進度動畫還是內容 */}
    {isLoading ? (
      <Loader/>
    ) : (
      <>
      <p>名稱： {product.name}</p>
      <p>價格： {product.price}</p>
      </>
    )}
  </>
  )
}
