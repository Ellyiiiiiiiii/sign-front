import { useState } from 'react'

export default function MyTextarea() {
  // 文字輸入區域(textarea)
  const [textareaText, setTextareaText] = useState('')
  
  return (
    <>
      <div title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        {/* 在html中原本是使用開頭與結尾來使用，在react中改為value屬性代表其中文字，與onChange事件對應 */}
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
