"use client"
import MenuButton from '../components/MenuButton'
import { ClipboardClock, Trash } from 'lucide-react'
import { useState } from 'react'


const History = () => {


const [tasks, setTasks] = useState([
  {
    name: "Task 1",
    tempo: "25:00",
    data: "2025-10-15",
    status: "Concluído",
    tipo: "Pomodoro",
  },
  {
    name: "Task 2",
    tempo: "25:00",
    data: "2025-04-12",
    status: "Interrompido",
    tipo: "Pomodoro",
  },
  {
    name: "Task 3",
    tempo: "25:00",
    data: "2025-10-15",
    status: "Concluído",
    tipo: "Pomodoro",
  }
])
const [hasHistory, setHasHistory] = useState(true)

const handleClearHistory = (e) => {
  e.preventDefault();
  setTasks([])
  setHasHistory(false)
}
  
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col items-center mb-6 mt-6">
        <div className="flex items-center gap-2">
          <h1 className="text-[var(--text-primary)] text-3xl font-bold">Histórico</h1>
          <ClipboardClock size={36} />
        </div>

        {/* menu de botões */}
        <MenuButton />

        <div className={`flex items-center gap-2 mb-4 ${hasHistory ? '' : 'hidden'}`}>
          <h1 className="text-[var(--text-primary)] text-xl font-semibold cursor-pointer hover:text-[var(--error)] duration-300 transition-colors">Apagar histórico</h1>
          <Trash onClick={handleClearHistory} size={42} className='text-[var(--text-primary)] cursor-pointer hover:bg-[var(--error)]/80 duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--error)]' />
        </div>

        {/* tabela de histórico */}
        <div className="bg-gray-600 rounded-lg p-4 w-[80vw] rounded-lg">
          <table className="w-full">
            <thead className="mb-4">
              <tr className="border-b [border-color:var(--border-light)]">
                <th className="text-[var(--text-primary)] text-left py-2">Task</th>
                <th className="text-[var(--text-primary)] text-left py-2">Tempo</th>
                <th className="text-[var(--text-primary)] text-left py-2">Data</th>
                <th className="text-[var(--text-primary)] text-left py-2">Status</th>
                <th className="text-[var(--text-primary)] text-left">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index)=> (
                <tr key={index}>
                  <td className="text-[var(--text-primary)] py-2">{task.name}</td>
                  <td className="text-[var(--text-primary)] py-2">{task.tempo}</td>
                  <td className="text-[var(--text-primary)] py-2">{task.data}</td>
                  <td className="text-[var(--text-primary)] py-2">{task.status}</td>
                  <td className="text-[var(--text-primary)] py-2">{task.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default History