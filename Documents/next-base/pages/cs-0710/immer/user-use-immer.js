// import { useState } from 'react'
// import { produce } from 'immer'
import { useImmer } from "use-immer"

export default function UserUseImmer() {
  const [user, setUser] = useImmer({
    id:1,
    name: 'Nike',
    address: {
      country: {
        city: "台南市",
      }
    }
  })

  return (
    <>
      <h1>Immer使用範例-2</h1>
      <h2>useImmer單純使用</h2>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>
      <button
        onClick={() => {
          // 這裡改寫為updater(或是recipe)
          const updater = (draft)=>{
            draft.name = 'Iris'
          }
          setUser(updater)
        }}
      >
        更改name為Iris
      </button>
      <button
        onClick={() => {
          const updater = (draft)=>{
            draft.address.country.city = '高雄市'
          }
          setUser(updater)
        }}
      >
        更改city為高雄市
      </button>
      
    </>
  )
}
