import { useState, useEffect } from 'react'

export default function EffectRender() {
  const [name, setName ] = useState('Nike')
  // 強制重新渲染
  const [force, setForce] = useState(false)

  // 樣式1: 
  useEffect(() => {
    console.log('render!')
  })

  return (
    <>
      <h1>Effect與react render的關係</h1>
      <hr />
      <p>name = {name}</p>
      <button
        onClick={() => {
          setName('Nike')
        }}
      >change name to Nike</button>
      <button
        onClick={() => {
          setName('Iris')
        }}
      >change name to Iris</button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >force re-render</button>
    </>
  )
}
