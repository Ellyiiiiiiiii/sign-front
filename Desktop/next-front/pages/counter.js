import { useState } from 'react'
// 導入react函式庫的useState勾子(hook)，用於在函式型元件中使用狀態

// 元件的命名一定要英文開頭大寫，否則react會認為是一般的函式
export default function Counter() {
  // [獲得狀態的變數, 設定狀態變數的函式] = useState(初始值)
  // 初始值只會在第一次呈現時被呼叫，之後都不會再被呼叫
  const [total, setTotal] = useState(0)

  // 函式的return代表元件的render(渲染)DOM元素
  // <>...</> 這是react中特有的Fragment(片段)元件
  return (
    <>
      <h1>{total}</h1>
      <button
        // 加入事件監聽, onClick的值必需是一個函式
        onClick={() => {
          // 設定狀態變數的函式(新的值)
          setTotal(total + 1)
        }}
      >+1</button>
    </>
  )
}
