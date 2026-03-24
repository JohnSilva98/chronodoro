import { Cicles } from "./Cicles"
import Toastify from 'toastify-js'
import { useRef, useState } from 'react'
import { CirclePlay, CircleStop } from 'lucide-react'
import { useTaskContext } from "../contexts/TaskContext/useTaskContext"
import { TaskModel } from "../models/TaskModel"
import { getNextCycle } from "../utils/GetNextCycle"
import { getNextCycleType } from "../utils/GetNextCycleType"
import { formatSecondsToMinutes } from "../utils/FormattSecondsToMinutes"

export default function MainForm() {
 
const {setState, state} = useTaskContext()
const [started, setStarted] = useState(false)

const nextCycle = getNextCycle(state.currentCycle)
const nextCycleType = getNextCycleType(nextCycle)
 

  const TaskNameInput = useRef<HTMLInputElement>(null)
  function handleCreateNewTask(e: React.FormEvent){
    e.preventDefault();
    
    if(TaskNameInput.current === null) return
    const taskName = TaskNameInput.current.value.trim()

    if(!taskName) {
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

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      CompleteDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60;
    setState(prevState => {
      return{
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSeconds: formatSecondsToMinutes(secondsRemaining),
        tasks:[...prevState.tasks, newTask],
        
      }
    })
    
  }

  return (
 <form onSubmit={handleCreateNewTask} className="flex flex-col items-center justify-center mt-2">
        <label className='text-(--text-primary) mb-4'>Task:</label>
        <input ref={TaskNameInput} onFocus={()=> {"border-(--primary-green-light)"}}  className='text-(--text-primary) border-b-2 border-(--border-light) p-2 rounded-sm' type="text" id="task" name="task"  />
        <div className="flex items-center gap-2 mt-3">
          <p className='text-(--text-primary)'>Nesse ciclo</p>
          <p className='text-(--text-primary)'> <span className='text-(--primary-green-light) font-semibold'>{}</span></p>
          <p className='text-(--text-primary)'> <span className='text-(--text-primary)'>por</span></p>
          <p className='text-(--text-primary)'> <span className='text-(--primary-green-light) font-semibold'>{} minutos</span></p>
        </div>
        {state.currentCycle > 0 && (
        <Cicles />
        )}
        <button  type="submit" className={`text-(--text-primary) hover:bg-(--primary-green-hover) duration-300 border border-(--border-dark) p-2 rounded-lg mt-2 mb-4 cursor-pointer px-8 ${started ? 'bg-(--error) hover:bg-(--error)/80' : 'bg-(--success) hover:bg-(--success)/80'}`}>{started ? <CircleStop size={24} color="white" /> : <CirclePlay size={24} color="white" />}</button>
       </form>
       
  )
    
}