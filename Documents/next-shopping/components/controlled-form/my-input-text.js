import { useState } from 'react'
import InputIME from '@/components/controlled-form/input-ime'

export default function MyInputText() {
  // 文字輸入框(input-text)
  const [inputText, setInputText] = useState('')
  // 數字輸入框(input-number)
  const [inputNumber, setInputNumber] = useState(0)
  // 日期輸入框(input-date)
  // 字串值(輸入格式是 yyyy-mm-dd 字串)
  const [inputDateText, setInputDateText] = useState('2020-01-22')

  // 時間日期物件值
  // 時間日期物件 ===> yyyy-mm-dd字串
  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : ''
  // yyyy-mm-dd字串 ===> 時間日期物件
  const stringToDate = (str = '') => new Date(str)

  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-01-01')
  )

  // 密碼輸入框
  const [inputPassword, setInputPassword] = useState('')
  // 顯示密碼的核取方塊使用，切換是否要呈現密碼
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>文字輸入框(input-text)輸入法時間點時略過</h2>
        <InputIME
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>數字輸入框(input-number)</h2>
        <input
          type="number"
          value={inputNumber}
          min={0}
          max={10}
          step={1}
          onChange={(e) => {
            // 為了保持狀態的資料類型一致性(number)
            // 所以設定到狀態前要先轉換為數字
            // setInputNumber(+e.target.value)
            setInputNumber(Number(e.target.value))
          }}
        />
        <h2>日期輸入框-(字串值)</h2>
        <input
          type="date"
          value={inputDateText}
          min="2018-01-01"
          max="2025-12-31"
          onChange={(e) => {
            setInputDateText(e.target.value)
          }}
        />
        <h2>日期輸入框-(時間日期物件值)</h2>
        <input
          type="date"
          // 呈現時要轉換為字串值
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            // 設定到狀態要轉換為時間日期物件值
            setInputDateObject(stringToDate(e.target.value))
          }}
        />
        <h2>密碼輸入框</h2>
        <input
          type={showPassword ? 'text' : 'password'}
          value={inputPassword}
          onChange={(e) => {
            setInputPassword(e.target.value)
          }}
        />{' '}
        <input
          type="checkbox"
          // checkbox與radio button是以checked來決定呈現狀態
          checked={showPassword}
          onChange={(e) => {
            // 第一種寫法，使用事件的checked值
            //setShowPassword(e.target.checked)
            // 第二種寫法，布林值切換(toggle)
            setShowPassword(!showPassword)
          }}
        />
        顯示密碼
      </div>
    </>
  )
}
