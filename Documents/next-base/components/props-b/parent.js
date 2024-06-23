import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')
  // 宣告一組專門要給子女B元件回傳資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent</h2>
      {/* P -> C */}
      <ChildA pData={pData} />
      <p>來自子女Ｂ的資料： {dataFromChild}</p>
      {/* C -> P專用的傳送資料的狀態設定函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
