export const PORT = 6005
export const DEV = true

export const API_SERVER = "http://localhost:3001";


// express 的位置
export const apiBaseUrl = 'http://localhost:3001/api'
export const avatarBaseUrl = 'http://localhost:3001/avatar'

// 登入的路徑 method: POST, 兩個欄位: account, password
export const LOGIN_JWT_POST = `${API_SERVER}/login-jwt1`
// 註冊會員
export const SIGNUP_POST = `${API_SERVER}/signup/add`