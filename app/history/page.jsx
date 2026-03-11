"use client"
import MenuButton from '../components/MenuButton'
import { ClipboardClock, Trash } from 'lucide-react'
import { useState } from 'react'


const History = () => {

const [hasHistory, setHasHistory] = useState(true)

const handleClearHistory = (e) => {
  e.preventDefault();
  setHasHistory(false)
}
  
  return (
    <div className="flex justify-center h-screen " style={{background: 'var(--gradient-dark)'}}>
     
     <div className="flex flex-col items-center mb-6 mt-6">
       <div className="flex items-center gap-2">
         <h1 className="text-[var(--text-primary)] text-3xl font-bold ">Histórico</h1>
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
               <tr>
                 <td className="text-[var(--text-primary)] py-2">Task 1</td>
                 <td className="text-[var(--text-primary)] py-2">25:00</td>
                 <td className="text-[var(--text-primary)] py-2">2025-10-15</td>
                 <td className="text-[var(--text-primary)] py-2">Concluído</td>
                 <td className="text-[var(--text-primary)] py-2">Pomodoro</td>
               </tr>
             </tbody>
           </table>
         </div>
   
     </div>
   
   </div>
  )
}

export default History