'use client'

import {Timer, CirclePlay, CircleStop} from 'lucide-react'
import { useState } from 'react'
import Toastify from 'toastify-js'
import MenuButton from "./components/MenuButton";
import { Cicles } from "./components/Cicles"; 
import Footer from "./components/Footer"; 


export default function Home() {
  const [task, setTask] = useState('')
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [cicle, setCicle] = useState('descanse')
  const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)


 



  const handleStart = (e: { preventDefault: () => void }) => {
     e.preventDefault()
      if(task === '') {
      Toastify({text: 'Por favor, insira uma tarefa', duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
      
        style: {
          background: "linear-gradient(to right, #1a7a20, #22c55e)",
        }
      }).showToast();
      return;
    }
    if(started === true) {
      setStarted(false)
      setTask('')
    } else {
      setStarted(true)
    }
    
    
    return
    setStarted(false)
  }


  return (
    <div className=" flex justify-center ">
      {/* cabeçalho da pagina */}
      <main className=" w-full h-screen" style={{background: 'var(--gradient-main)'}} >
        <div className="mt-5 flex flex-col items-center justify-center">
        <Timer color="#1a7a20e6" size={48} className='mb-1' />
         <h1 className="text-[var(--text-primary)] text-3xl font-bold mb-1">Chronodoro</h1>
        <p className="text-[var(--text-secondary)] text-2xl">Pomodoro tracker</p>
        </div>
       {/* menu de botões */}
       <MenuButton />
       {/* contador */}
       <div className="flex flex-col items-center justify-center mt-7">
       <h1 className='text-[var(--text-primary)] text-8xl font-bold'>00:00</h1>

       <form className="flex flex-col items-center justify-center mt-2">
        <label className='text-[var(--text-primary)] mb-4'>Task:</label>
        <input onFocus={()=> {"border-[var(--primary-green-light)]"}} onChange={(e)=> setTask(e.target.value)} className='text-[var(--text-primary)] border-b-2 border[var(--border-light)] p-2 rounded-sm' type="text" id="task" name="task" value={task} />
        <div className="flex items-center gap-2 mt-3">
          <p className='text-[var(--text-primary)]'>Nesse ciclo</p>
          <p className='text-[var(--text-primary)]'> <span className='text-[var(--primary-green-light)] font-semibold'>{cicle}</span></p>
          <p className='text-[var(--text-primary)]'> <span className='text-[var(--text-primary)]'>por</span></p>
          <p className='text-[var(--text-primary)]'> <span className='text-[var(--primary-green-light)] font-semibold'>{shortBreakTime} minutos</span></p>
        </div>
        <Cicles />
        <button onClick={handleStart} className={`text-[var(--text-primary)] hover:bg-[var(--primary-green-hover)] duration-300 border border-[var(--border-dark)] p-2 rounded-lg mt-2 cursor-pointer px-8 ${started ? 'bg-[var(--error)] hover:bg-[var(--error)]/80' : 'bg-[var(--success)] hover:bg-[var(--success)]/80'}`}>{started ? <CircleStop size={24} color="white" /> : <CirclePlay size={24} color="white" />}</button>
       </form>
       </div>
      <Footer />
      </main>
    </div>
  );
}