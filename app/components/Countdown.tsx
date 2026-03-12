import React from 'react'
import { useState } from 'react'

const Countdown = () => {
     const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  return (
      <div className="flex flex-col items-center justify-center mt-7">
       <h1 className='text-[var(--text-primary)] text-8xl font-bold'>00:00</h1>
       </div>
  )
}

export default Countdown