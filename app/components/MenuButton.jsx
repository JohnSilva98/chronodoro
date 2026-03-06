import { House, History, Settings as SettingsIcon, Lightbulb } from 'lucide-react'

const MenuButton = () => {
  return (
    <div>
      {/* menu de botões */}
       <div className="flex justify-center gap-4 mt-3 mb-6">

       <a href="/">
         <House color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--bg-icons)]' />
       </a>
       <a href="/history">
         <History color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--bg-icons)]' />
       </a>
       <a href="/settings">
         <SettingsIcon color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--bg-icons)]' />
       </a>
       
       <Lightbulb color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--bg-icons)]' />
       
       </div>
    </div>
  )
}

export default MenuButton