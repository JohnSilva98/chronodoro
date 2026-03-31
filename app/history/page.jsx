"use client"
import MenuButton from '../components/MenuButton'
import { ClipboardClock, Trash } from 'lucide-react'
import { useState } from 'react'
import { useTaskContext } from '../contexts/TaskContext/useTaskContext'



const History = () => {

  const {state} = useTaskContext()

const [hasHistory, setHasHistory] = useState(true)

const handleClearHistory = (e) => {
  e.preventDefault();
  // TODO: Implement clear history functionality
  setHasHistory(false)
}
  
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col items-center mb-6 mt-6">
        <div className="flex items-center gap-2">
          <h1 className="text-(--text-primary) text-3xl font-bold">Histórico</h1>
          <ClipboardClock size={36} />
        </div>

        {/* menu de botões */}
        <MenuButton />

        <div className={`flex items-center gap-2 mb-4 ${hasHistory ? '' : 'hidden'}`}>
          <h1 className="text-(--text-primary) text-xl font-semibold cursor-pointer hover:text-(--error) duration-300 transition-colors">Apagar histórico</h1>
          <Trash onClick={handleClearHistory} size={42} className='text-(--text-primary) cursor-pointer hover:bg-(--error)/80 duration-300 transition-colors border border-(--border-dark) p-[10px] rounded-lg bg-(--error)' />
        </div>

        {/* tabela de histórico */}
        <div className="bg-(--bg-dark-2) rounded-lg p-4 w-[80vw] border border-(--border-light)">
          <table className="w-full">
            <thead className="mb-4">
              <tr className="border-b border-(--border-light)">
                <th className="text-(--text-primary) text-left py-2">Task</th>
                <th className="text-(--text-primary) text-left py-2">Tempo</th>
                <th className="text-(--text-primary) text-left py-2">Data</th>
                <th className="text-(--text-primary) text-left py-2">Status</th>
                <th className="text-(--text-primary) text-left">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks.map((task)=> (
                <tr key={task.id}>
                  <td className="text-(--text-primary) py-2">{task.name}</td>
                  <td className="text-(--text-primary) py-2">{task.duration} min</td>
                  <td className="text-(--text-primary) py-2">{new Date(task.startDate).toISOString()}</td>
                  <td className="text-(--text-primary) py-2">{task.interruptDate}</td>
                  <td className="text-(--text-primary) py-2">{task.type}</td>
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