import { House, History, Settings as SettingsIcon, Lightbulb, LightbulbOff } from 'lucide-react'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

const MenuButton = () => {

  const [theme, setTheme] = useState<AvailableThemes>('dark')
  
  const toggleTheme = (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    event.preventDefault()
    setTheme(prevTheme =>{
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

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
       <a href="" onClick={toggleTheme}>
         <Lightbulb color="black" size={48} className='cursor-pointer hover:bg-[var(--primary-green-hover)] duration-300 transition-colors border border-[var(--border-dark)] p-[10px] rounded-lg bg-[var(--bg-icons)]' /> 
       </a>
       
       </div>
    </div>
  )
}

export default MenuButton