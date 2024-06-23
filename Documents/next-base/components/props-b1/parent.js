import { useState } from 'react'
import ChildA from '../props-b1/child-a'
import ChildB from '../props-b1/child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')

  return (
    <>
      <h2>Parent</h2>
      <ChildA pData={pData} />
      <ChildB />
    </>
  )
}
