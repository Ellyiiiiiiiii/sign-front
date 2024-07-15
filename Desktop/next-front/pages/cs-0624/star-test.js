import { useState } from 'react'

import Star from '@/components/star'

export default function StarTest() {
  const [r1, setR1] = useState(4)
  const [r2, setR2] = useState(3)

  return (
    <>
      <h1>星星評分測試頁</h1>
      <hr />
      <h2>對照組</h2>
      <Star />
      <hr />
      <h2>測試組</h2>
      <p>子女A加B</p>
      <Star initRating={r1} maxCount={6} onRatingChang={setR1} fillColor='#ff6600' emptyColor='green' />
      <Star initRating={r2} maxCount={10} onRatingChang={setR2} fillColor='#ff6600' emptyColor='blue' />

    </>
  )
}
