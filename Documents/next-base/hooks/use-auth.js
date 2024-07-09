import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const router = useRouter()

  // 會員使用的認證&授權狀態
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: {
      id: 0,
      username: '',
      email: '',
      name: '',
    },
  })

  // 一般命名: login/signIn, logout/signOut, register/signUp
  const login = (username, password) => {
    if(username==='ron' && password==='11111'){
      setAuth({
        isAuth:true,
        userData:{
          id:2,
          username:'ron',
          email: 'ron@test.com',
          name: 'Ron',
        },
      })
      alert('登入成功')
      // 導向會員資料頁
      router.push('/cs-0625/user/profile')
    } else {
      alert('帳號密碼錯誤')
    }
  }

  const logout = () => {
    setAuth({
      isAuth:true,
      userData:{
        id:2,
        username:'ron',
        email: 'ron@test.com',
        name: 'Ron',
      },
    })
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
  
}

// 3. 
export const useAuth = () => useContext(AuthContext)