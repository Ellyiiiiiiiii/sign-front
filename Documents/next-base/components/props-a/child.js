import React from 'react'

// 子女元件可以從函式的傳入參數值得到父母傳來的值
// props必定是一個物件
// 在傳入參數值解構提取所有屬性成為變數名(注意，一定要加花括號{}才是解構語法)
export default function Child({
  title = '沒寫',
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={isConnected ? 'true' : 'false'}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1, 2)={sum(1, 2)}</p>
    </>
  )
}
