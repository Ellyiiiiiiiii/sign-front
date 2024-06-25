import { createContext, useContext, useState } from 'react'
// import { useRouter } from 'next/router'

// 1. 建立與導出它
const CartContext = createContext(null)

// 2. 建立一個Context Provider元件
// 目的: 將所有要共享狀態集中統一管理，提供給上層元件(_app.js)使用
// props.children屬性，代表包覆在Provider中所有的子女元件
export function CartProvider({ children }) {
  // 加入購物車的商品項目
  // 以其中的物件資料比較原商品物件，需要多一個 qty 數量 屬性
  const [items, setItems] = useState([])

  const handleIncrease = (id) => {
    const nextItems = items.map((v, i) => {
      // 如果符合(id相當於傳入的id)的物件，遞增其中屬性qty的數字
      if(v.id === id) return { ...v, qty: v.qty + 1 }
      // 否則回傳原本物件
      else return v
    })
    setItems(nextItems)
  }

  const handleDecrease = (id) => {
    let nextItems = items.map((v, i) => {
      if(v.id === id) return { ...v, qty: v.qty - 1 }
      else return v
    })

    // 官網解法，設定到狀態前，先過濾掉 qty=0的item
    nextItems = nextItems.filter((v) => v.qty > 0)

    setItems(nextItems)
  }

  const handleRemove = (id) => {
    const nextItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(nextItems)
  }

  const handleAdd = (product) => {
    // 先尋找此商品是否已經在購物車裡
    const foundIndex = items.findIndex((v) => v.id === product.id)

    if(foundIndex > -1) {
      // 如果有找到->遞增
      handleIncrease(product.id)
    } else {
      // 否則->新增商品到購物車項目
      // 擴充商品物件多一個qty屬性，預設為1
      const newItem = { ...product, qty: 1 }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }

  // 計算總數量
  // const calcTotalQty = ()=>{
  //   let total = 0
  //   for(let i=0; i < items.length; i++) {
  //     total += items[i].qty
  //   }
  //   return total
  // }

  // 計算總金額
  // const calcTotalPrice = ()=>{
  //   let total = 0
  //   for(let i=0; i < items.length; i++) {
  //     total += items[i].qty * items[i].price
  //   }
  //   return total
  // }

  // 計算總金額與數量，用 reduce 陣列迭代方法(累加、歸納)
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return <CartContext.Provider value={{
    items,
    handleAdd,
    handleDecrease,
    handleIncrease,
    handleRemove,
    totalPrice,
    totalQty,
  }}>{children}</CartContext.Provider>
}

// 3. 建立一個包裝useContext與對應context的專用函式
// 目的: 讓消費者們(consumers)方便呼叫使用共享狀態，提高可閱讀性
export const useCart = () => useContext(CartContext)