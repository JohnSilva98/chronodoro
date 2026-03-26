import { Cicles } from "./Cicles"
import Toastify from 'toastify-js'
import { useRef, useState } from 'react'
import { CirclePlay, CircleStop } from 'lucide-react'
import { useTaskContext } from "../contexts/TaskContext/useTaskContext"
import { TaskModel } from "../models/TaskModel"
import { getNextCycle } from "../utils/GetNextCycle"
import { getNextCycleType } from "../utils/GetNextCycleType"
import { TaskActionsTypes } from "../contexts/TaskContext/TaskActions"

export default function MainForm() {
 
const {dispatch, state} = useTaskContext()
// ciclos
const nextCycle = getNextCycle(state.currentCycle)
const nextCycleType = getNextCycleType(nextCycle)
// tips
const tipsForWhenActiveTask = {
  workTime: <span>Concentre-se por {state.config.workTime} minutos</span>,
  shortBreak: <span>Descanse por {state.config.shortBreak} minutos</span>,
  longBreak: <span>Descanse por {state.config.longBreak} minutos</span>
}

const tipsForWhenNoActiveTask = {
  workTime: <span>O próximo ciclo é de {state.config.workTime} minutos</span>,
  shortBreak: <span>O próximo descanso é de {state.config.shortBreak} minutos</span>,
  longBreak: <span>O próximo descanso será longo</span>
}

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

    

    dispatch({type: TaskActionsTypes.START_TASK, payload: newTask})

 


  }


function handleInterruptTask() {
  dispatch({type: TaskActionsTypes.INTERRUPT_TASK })
}
  return (
 <form onSubmit={handleCreateNewTask} className="flex flex-col items-center justify-center mt-2">
        <label className='text-(--text-primary) mb-4'>Task:</label>
        <input ref={TaskNameInput}
         onFocus={()=> {"border-(--primary-green-light)"}}  
        className='text-(--text-primary) border-b-2 border-(--border-light) p-2 rounded-sm'
         type="text" 
         id="task" 
         name="task" 
         disabled={!!state.activeTask} />
        <div className="flex items-center gap-2 mt-3">
          {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
          {!state.activeTask && tipsForWhenNoActiveTask[nextCycleType]}
        </div>
        {state.currentCycle > 0 && (
        <Cicles />
        )}
        {!state.activeTask &&(
        <button  type="submit"
        key="start"
        title="Iniciar nova tarefa"
        aria-label="Iniciar nova tarefa"
        className={`text-(--text-primary) bg-(--primary-green-light) hover:bg-(--primary-green-hover) duration-300 border border-(--border-dark) p-2 rounded-lg mt-2 mb-4 cursor-pointer px-8`}><CirclePlay size={24} color="white" /></button>
        )} {!!state.activeTask && (<button  
        key="stop"
        type="button"
        onClick={handleInterruptTask}
        title="Interromper tarefa atual"
        aria-label="Interromper tarefa atual"
        className={`text-(--text-primary) bg-(--error) hover:bg-(--error/60) duration-300 border border-(--border-dark) p-2 rounded-lg mt-2 mb-4 cursor-pointer px-8`}><CircleStop size={24} color="white" /></button>)}
        
        </form>
       
    )
}
 