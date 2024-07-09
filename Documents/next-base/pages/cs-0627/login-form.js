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

  // 表單送出事件函式
  const handleSubmit = (e)=>{
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
    alert('全對，送伺服器')
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
