import { useState } from 'react';

export default function LoginForm() {
  // 狀態使用物件類型，
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 記錄錯誤欄
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // show password
  const [showPassword, setShowPassword] = useState(false)

  // 多欄位
  const handleFieldChange = (e) => {
    // e.target
    // console.log(e.target.name, e.target.type, e.target.value)

    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleLogout = async () => {
    try {
      const url = 'http://localhost:3005/api/members/logout'
      const res = await fetch(url, {
        credentials: 'include', //設定cookie或存取隱私資料要加這個參數
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })

      const resData = await res.json()
      console.log(resData)

      alert('已登出')
    } catch (e) {
      console.error(e)
    }
  }

  // 表單送出事件函式
  const handleSubmit = async (e)=>{
    // 先阻擋form預設送出行為
    e.preventDefault()

    // 表單檢查----------- START
    // 建立新的錯誤訊息物件
    const newErrors = { username: '', password: '' }

    // if(user.username === ''){ 
    if(!user.username) {
      newErrors.username = '帳號為必填'
    }

    if(!user.password){
      newErrors.password = '密碼為必填'
    }

    if (user.password.length < 4 || user.password.length > 10) {
      newErrors.password ||= '密碼最少5個字元至多10字元'
    }

    // 檢查完成回到錯誤狀態
    setErrors(newErrors)

    // newErrors物件中若有屬性非空白字串，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 若有錯，停止送到伺服器
    if(hasErrors){
      alert('有檢查到錯誤')
      return // 在函式內做流程控制，執行到這會跳出函式執行
    }
    // -----------------------END
    try {
      const url = 'http://localhost:3005/api/members/login'
      const res = await fetch(url, {
        credentials: 'include', //設定cookie或存取隱私資料要加這個參數
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      const resData = await res.json()
      console.log(resData)

      alert('送到伺服器去')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>會員登入表單</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* 用form元素，每個欄位須給name */}
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.username}</div>
        <div>
          <label>
            密碼:{' '} 
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => {
              setShowPassword(!showPassword)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{errors.password}</div>
        <div>
          {/* 用form元素的button， */}
          <button type="submit">登入</button>
          <button type="button" onClick={handleLogout}>登出</button>
        </div>
      </form>
      <style jsx>
      {`
        .error {
          color: red;
          font-size: 12px;
          height: 16px;
        }
      `}
      </style>
    </>
  );
}
