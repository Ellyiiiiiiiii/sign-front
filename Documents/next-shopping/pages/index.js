import React from 'react'
// import Image from 'next/image'
import styles from '@/styles/index.module.css'

export default function Index() {
  return (
    <>
      <nav className="l-navbar">
        <a className="l-navbar__logo-mask" href="index.html">
          In Shopping logo
        </a>
        <div className="l-navbar__body">
          <div className="l-navbar__menu">
            <ul className="l-navbar__btn-box --link">
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##">
                  <span className="u-ff-en u-text-lg">HOT </span>
                  <span>熱銷 </span>
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##">
                  <span className="u-ff-en u-text-lg">HI-TECH </span>
                  <span>電子產品</span>
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##">
                  <span className="u-ff-en u-text-lg">SPORT </span>
                  <span>運動健身</span>
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##">
                  <span className="u-ff-en u-text-lg">HOUSEHOLD </span>
                  <span>日常好物</span>
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##">
                  <span className="u-ff-en u-text-lg">ON SALE </span>
                  <span>特價</span>
                </a>
              </li>
            </ul>
            <ul className="l-navbar__btn-box --icon">
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##" target="_blank">
                  <iconify-icon className="u-icon --md" icon="bxs:user" />
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##" target="_blank">
                  <iconify-icon className="u-icon --md" icon="mdi:register" />
                </a>
              </li>
              <li className="l-navbar__btn-wrap">
                <a className="l-navbar__btn" href="##" target="_blank">
                  <iconify-icon
                    className="u-icon --md"
                    icon="clarity:shopping-cart-solid"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="l-navbar__burger">
          <div className="o-burger" onclick="toggleNavbar()">
            <div className="o-burger__wrap">
              <div className="o-burger__line" />
              <div className="o-burger__line" />
              <div className="o-burger__line" />
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  )
}
