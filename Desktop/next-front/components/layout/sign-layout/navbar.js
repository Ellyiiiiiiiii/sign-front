import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/my-auth-context'

export default function Navbar({ pageName = '' }) {
  const { auth, logout } = useAuth()

  return (
    <div>
      <ul>
        {auth.id ? (
          <>
            <li>
              <a>{auth.name}</a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault()
                  logout()
                }}
              >
                登出
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                // className={`nav-link ${
                //   pageName === "login" ? styles.NavbarItemActive : null
                // }`}
                href="/login"
              >
                登入
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul>
        <li>
          <Link href="/register">註冊</Link>
        </li>
      </ul>
    </div>
  )
}
