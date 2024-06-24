import React from 'react'

export default function ChildA({ dataFromChild }) {
  return (
    <>
      <h3>ChildA</h3>
      {/* <p>來自父母元件的資料： {pData}</p> */}
      <p>來自子女Ｂ的資料： {dataFromChild}</p>
    </>
  )
}
