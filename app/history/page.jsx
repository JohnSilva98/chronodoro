import MenuButton from '../components/MenuButton'

const History = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#052e16]">
     
     <div className="flex flex-col items-center">
       <h1 className="text-[#e5e7eb] text-3xl font-bold mb-4">Histórico</h1>
   
         {/* menu de botões */}
         <MenuButton />
   
     </div>
   
   </div>
  )
}

export default History