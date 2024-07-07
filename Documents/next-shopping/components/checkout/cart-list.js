import React from 'react'
import styles from './cart.module.css'
import { useCart } from '@/hooks/use-cart'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartList() {
  const {
    items ,
    handleDecrease,
    handleIncrease,
    handleRemove,
  } = useCart()

  // 改用MySwal取代Swal
  const MySwal = withReactContent(Swal)

  const notifyAndRemove = (productName = '', productId = 0) => {
    MySwal.fire({
      title: "是否要移除商品?",
      text: "商品會難過喔!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "取消",
      confirmButtonText: "移除"
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "已刪除!",
          text: productName + " 已從購物車刪除",
          icon: "success"
        })

        // 做刪除的動作
        handleRemove(productId)
      }
    })
  }

  return (
    <>
      <ul className={styles['list']}>
      {items.map((v,i)=>{
        return (
          <li key={v.id} className={styles['item']}>
          <div className={styles['w-400']}>{v.name}</div>
          <div>{v.price}</div>
          <div>
            <button onClick={() => {
              handleIncrease(v.id)
            }}>+</button>
            <span>{v.qty}</span>
            <button onClick={() => {
              handleDecrease(v.id)
            }}>-</button>
          </div>
          <div>
            <button onClick={() => {
              // 改跳出sweetalert視窗，確認後才刪除
              notifyAndRemove(v.name, v.id)
              // handleRemove(v.id)
            }}>移除</button>
          </div>
        </li>
        )
      })}
      </ul>
    </>
  )
}
