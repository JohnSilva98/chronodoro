import { House, History, Settings as SettingsIcon, Lightbulb } from 'lucide-react'

const MenuButton = () => {
  return (
    <div>
      {/* menu de botões */}
       <div className="flex justify-center gap-4 mt-6 mb-6">

       <a href="/">
         <House color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
       </a>
       <a href="/history">
         <History color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
       </a>
       <a href="/settings">
         <SettingsIcon color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
       </a>
       
       <Lightbulb color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
       
       </div>
    </div>
  )
}

export default MenuButton