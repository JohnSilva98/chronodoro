import { Cicles } from "./Cicles"
import Toastify from 'toastify-js'
import { useState } from 'react'
import { CirclePlay, CircleStop } from 'lucide-react'
import { useTaskContext } from "../contexts/TaskContext/useTaskContext"


export default function MainForm() {
 

 const [taskName, setTaskName] = useState('')
 const [started, setStarted] = useState(false)
 const [cicle, setCicle] = useState('descanse')
  const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)

 const handleStart = (e: { preventDefault: () => void }) => {
     e.preventDefault()
      if(taskName === '') {
      Toastify({text: 'Por favor, insira uma tarefa', duration: 3000,
        close: true, //allow close the toast
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
      setTaskName('')
      
    } else {
      setStarted(true)
    }
    
    
   
  }

  function handleCreateNewTask(e: React.FormEvent){
    e.preventDefault();
    
    
  }

  return (
 <form onSubmit={handleCreateNewTask} className="flex flex-col items-center justify-center mt-2">
        <label className='text-(--text-primary) mb-4'>Task:</label>
        <input onFocus={()=> {"border-(--primary-green-light)"}} onChange={(e)=> setTaskName(e.target.value)} className='text-(--text-primary) border-b-2 border-(--border-light) p-2 rounded-sm' type="text" id="task" name="task" value={taskName} />
        <div className="flex items-center gap-2 mt-3">
          <p className='text-(--text-primary)'>Nesse ciclo</p>
          <p className='text-(--text-primary)'> <span className='text-(--primary-green-light) font-semibold'>{cicle}</span></p>
          <p className='text-(--text-primary)'> <span className='text-(--text-primary)'>por</span></p>
          <p className='text-(--text-primary)'> <span className='text-(--primary-green-light) font-semibold'>{shortBreakTime} minutos</span></p>
        </div>
        <Cicles />
        <button  type="submit" className={`text-[var(--text-primary)] hover:bg-[var(--primary-green-hover)] duration-300 border border-[var(--border-dark)] p-2 rounded-lg mt-2 mb-4 cursor-pointer px-8 ${started ? 'bg-[var(--error)] hover:bg-[var(--error)]/80' : 'bg-[var(--success)] hover:bg-[var(--success)]/80'}`}>{started ? <CircleStop size={24} color="white" /> : <CirclePlay size={24} color="white" />}</button>
       </form>
       
  )
    
}