import { useImmerReducer } from "use-immer"

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
// https://redux.js.org/style-guide/#priority-c-rules-recommended
// 建議命名風格: 'domain/eventName'
// 更動姓名:user/changeName
// 更動城市:user/changeCity

// 2: reducer(純函式)
// action = { type, payload: { value:要更動的值 } }
// 這裡的state相當於immer中的draft(代理狀態)，並沒有違反狀態是"不可改變性的原則"
const reducer = (state, action) =>{
  switch(action.type){
    case 'user/changeName':
      state.name = action.payload.value
      break
    case 'user/changeCity':
      state.address.country.city = action.payload.value
      break
    default:
      throw new Error()
  }
}

export default function UserUseReducerImmer() {
  // 3: 宣告一組state, dispatch
  const [user, dispatch] = useImmerReducer(reducer, initState)

  return (
    <>
      <h1>useReducer使用範例</h1>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>
      <button
        onClick={() => {
          // // 使用dispatch(發送)一個動作物件，來進行狀態變動
          dispatch({type:'user/changeName', payload: { value: 'Iris'}})
        }}
      >
        更改name為Iris
      </button>
      <button
        onClick={() => {
          // 使用dispatch(發送)一個動作物件，來進行狀態變動
          dispatch({type:'user/changeCity', payload: { value: '高雄市'}})
        }}
      >
        更改city為高雄市
      </button>
    </>
  )
}
