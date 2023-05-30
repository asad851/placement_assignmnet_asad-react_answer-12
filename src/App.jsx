import React, { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [operation,setOperation] = useState("")
  const [visible, setVisible] = useState("hidden")
  useEffect(() => {
    setVisible("visible")
    setTimeout(() => {
      setVisible("hidden")
    }, 500);
  }, [count])
  
  return (
    <>
    <p style={{visibility:visible}}> {operation}</p>
    <div>
      <button onClick={()=>{setCount(prev=>prev+1),setOperation("+1")}}>+</button>
      <span>{count}</span>
      <button onClick={()=>{setCount(prev=>prev-1),setOperation("-1")}}>-</button>
      
    </div>
    </>
  )
}

export default App