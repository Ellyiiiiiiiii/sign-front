import SignLayout from '@/components/layout/sign-layout'
import { useState } from 'react'
import { SIGNUP_POST } from "@/configs";

export default function Register() {
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: '', // 錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    if (e.target.name === 'agree') {
      setUser({ ...user, [e.target.name]: e.target.checked })
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 表單檢查，建立一個新的錯誤物件 --- START
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    if (!user.name) {
      newErrors.name = '姓名為必填'
    }
    if (!user.email) {
      newErrors.email = 'email為必填'
    }

    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }

    if (!user.password) {
      newErrors.password = '密碼為必填'
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }

    if (!user.agree) {
      newErrors.agree = '請先同意會員註冊條款'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return // 在函式內作流程控制用，執行到這會跳出函式執行
    }
    // 表單檢查 --- END

    // 最後檢查完全沒問題才送到伺服器(ajax/fetch)
    try {
      const res = await fetch(SIGNUP_POST, {
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
    <SignLayout>
      <h2>會員註冊</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            姓名:{' '}
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleFieldChange}

            />
          </label>
        </div>
        <span className="error">{errors.name}</span>
        <div>
          <label>
            Email:{' '}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <span className="error">{errors.email}</span>
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
            onChange={(e) => {
              setShowPassword(e.target.checked)
            }}
          />{' '}
          顯示密碼
        </div>
        <span className="error">{errors.password}</span>
        <div>
          <label>
            確認密碼:{' '}
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showConfirmPassword}
            onChange={(e) => {
              setShowConfirmPassword(e.target.checked)
            }}
          />{' '}
          顯示密碼
        </div>
        <span className="error">{errors.confirmPassword}</span>
        <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={user.agree}
            onChange={handleFieldChange}
          />{' '}
          我同意網站會員註冊條款
        </label>
        </div>
        <span className="error">{errors.agree}</span>
        <button type="submit">註冊</button>

      </form>
    </SignLayout>
  )
}
