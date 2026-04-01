"use client"
import { useState } from "react";
import MenuButton from "../components/MenuButton";
import { Settings2 } from "lucide-react";
import { toast } from 'react-toastify'
import { useTaskContext } from "../contexts/TaskContext/useTaskContext"; 
import { TaskActionsTypes } from "../contexts/TaskContext/TaskActions";


export default function Settings() {

  const {state, dispatch} = useTaskContext()

  const [workTime, setWorkTime] = useState(state.config.workTime)
  const [shortBreak, setShortBreak] = useState(state.config.shortBreak)
  const [longBreak, setLongBreak] = useState(state.config.longBreak)


    const handleSave = (e: React.FormEvent) => {
      e.preventDefault();

      dispatch({type: TaskActionsTypes.UPDATE_SETTINGS, payload: {workTime, shortBreak, longBreak}})


      toast.success("Configurações salvas com sucesso!")
    }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 mt-6">
          <h1 className="text-(--text-primary) text-3xl font-bold">Configurações</h1>
          <Settings2 size={36} />
        </div>

        {/* menu de botões */}
        <MenuButton />

        <form className="flex flex-col justify-center mb-5">
          <label>Tempo de foco</label>
          <input
            className="bg-(--bg-dark-1) text-(--text-primary) rounded-lg p-2 w-50 border-b-2 border-(--border-light) mb-5"
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(parseInt(e.target.value))}
          />

          <label>Tempo de pausa curta</label>
          <input
            className="bg-(--bg-dark-1) text-(--text-primary) rounded-lg p-2 w-50 border-b-2 border-(--border-light) mb-5"
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(parseInt(e.target.value))}
          />

          <label>Tempo de pausa longa</label>
          <input
            className="bg-(--bg-dark-1) text-(--text-primary) rounded-lg p-2 w-50 border-b-2 border-(--border-light) mb-5"
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(parseInt(e.target.value))}
          />

          <button
            onClick={handleSave}
            className="bg-(--btn-primary) hover:bg-(--btn-primary-hover) duration-300 text-(--btn-text) rounded-lg p-2 w-50 mt-4 cursor-pointer"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  )
}
