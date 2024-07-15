import { useState } from 'react'
import { produce } from 'immer'

export default function User() {
  const [user, setUser] = useState({
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
      <h1>Immer使用範例</h1>
      <h2>useState單純使用</h2>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>
      <button
        onClick={() => {
          const nextUser = {
            ...user,
            name: 'Iris',
          }
          setUser(nextUser)
        }}
      >
        更改name為Iris
      </button>
      <button
        onClick={() => {
          const nextUser = {
            ...user,
            address: {
              ...user.address,
              country: {
                ...user.address.city,
                city: '高雄市',
              },
            }
          }
          setUser(nextUser)
        }}
      >
        更改city為高雄市
      </button>
      <button
        onClick={() => {
          // produce以baseState(第一傳入參數)，在recipe(第二傳入參數，必為函式)的傳入參數被如何更動，來進行必要的更動。最終傳回
          const nextUser = produce(user, (draft) => {
            draft.address.country.city = '高雄市'
          })
          setUser(nextUser)
        }}
      >
        (immer)更改city為高雄市
      </button>
    </>
  )
}
