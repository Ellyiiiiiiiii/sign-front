import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import Loader from '@/components/loader'

// 開發期間使用，之後可以從useAuth中得到
// const userId = 1

export default function ProfileForm() {
  const { auth } = useAuth()
  const userId = auth?.userData?.id

  // 宣告一個載入的狀態信號值
  // 設定一開始進入此頁面就要向伺服器獲取資料，不出現初始值
  const [isLoading, setIsLoading] = useState(true)

  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    setUser({ ...user, [e.target.name]: e.target.value })

    // ES6特性: 計算得來的屬性名稱(computed property names)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這樣可以動態的設定物件的屬性名稱
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 表單檢查，建立一個新的錯誤物件 --- START
    const newErrors = {
      name: '',
      email: '',
      username: '',
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

    if (!user.username) {
      newErrors.username = '帳號為必填'
    }

    // if (!user.password) {
    //   newErrors.password = '密碼為必填'
    // }

    // if (!user.confirmPassword) {
    //   newErrors.confirmPassword = '確認密碼為必填'
    // }

    // if (!user.agree) {
    //   newErrors.agree = '請先同意會員註冊條款'
    // }

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
      // 建立只需要傳到後端的資料物件
      // 帳號不允許改
      const updatedMember = {
        name: user.name,
        email: user.email,
      }

      // 密碼有填再加入
      if (user.password) {
        updatedMember.password = user.password
      }

      const url = `http://localhost:3005/api/members/${userId}/profile`
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMember),
      })

      const resData = await res.json()
      console.log(resData)

      alert('修改成功')
    } catch (e) {
      console.error(e)
    }
  }

  // 用會員id獲取資料
  const getMember = async () => {
    try {
      const url = `http://localhost:3005/api/members/${userId}`

      const res = await fetch(url)
      const resData = await res.json()
      console.log(resData)
      if (resData.status === 'success') {
        const member = resData.data.member
        // 設定會員資料(除了密碼)
        setUser({
          ...user,
          name: member.name,
          username: member.username,
          email: member.email,
        })

        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // didMount時，先使用userId向伺服器fetch要會員資料
  useEffect(() => {
    // 檢查userId(來自全域auth狀態)是否有，如果是0是沒有，代表沒有登入
    // 沒登入，沒userId ===> 不會執行getMember ===> 載入指示動畫不會關掉 ==> 看不到任何畫面
    if (userId) {
      getMember()
    }
  }, [])

  const display = (
    <>
      <h1>會員資料表單</h1>
      <form onSubmit={handleSubmit}>
        <label>
          姓名:{' '}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.name}</span>
        <br />
        <label>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.email}</span>
        <br />
        <label>
          帳號:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            disabled
          />
        </label>
        <br />
        <span className="error">{errors.username}</span>
        <br />
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
        <br />
        <span className="error">{errors.password}</span>
        <br />
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
        <br />
        <span className="error">{errors.confirmPassword}</span>
        <br />
        <button type="submit">修改</button>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 12px;
            height:16px;
          }
        `}
      </style>
    </>
  )
  // 載入指示動畫
  const spinner = (
    <>
      <h1>正向伺服器查詢是否有權限進入...</h1>
      <Loader />
    </>
  )

  return <>{isLoading ? spinner : display}</>
}
