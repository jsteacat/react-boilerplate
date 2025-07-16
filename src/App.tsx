import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const input = useRef<HTMLInputElement>(null)

  function onClear() {
    setInputValue('')
    input.current?.focus()
  }

  return (
    <div>
      <input
        type='text'
        ref={input}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={onClear}>clear</button>
    </div>
  )
}

export default App
