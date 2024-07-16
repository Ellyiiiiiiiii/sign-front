import { useReducer } from 'react'

// 1: state 初始值
const initState = {
  id:1,
  name: 'Nike',
  address: {
    country: {
      city: "台南市",
    }
  }
}

// 1.5: 規劃action type(類型)
// user/changeName
// user/changeCity

// 2: reducer(純函式)
const reducer = (state, action) =>{
  switch(action.type){
    case 'user/changeName':
      return {
        ...state,
        name: action.payload.value,
      }
    case 'user/changeCity':
      return {
        ...state,
        address: {
          ...state.address,
          country: {
            ...state.address.city,
            city: action.payload.value,
          }
        },
      }
    default:
      throw new Error()
  }
}

export default function UserUseReducer() {
  // 3: 宣告一組state, dispatch
  const [user, dispatch] = useReducer(reducer, initState)

  return (
    <>
      <h1>useReducer使用範例</h1>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>
      <button
        onClick={() => {
          // dispatch
          dispatch({type:'user/changeName', payload: { value: 'Iris'}})
        }}
      >
        更改name為Iris
      </button>
      <button
        onClick={() => {
          dispatch({type:'user/changeCity', payload: { value: '高雄市'}})
        }}
      >
        更改city為高雄市
      </button>
    </>
  )
}
