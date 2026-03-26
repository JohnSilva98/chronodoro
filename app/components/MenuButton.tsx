import { House, History, Settings as SettingsIcon, Lightbulb, LightbulbOff } from 'lucide-react'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

const MenuButton = () => {

  const [theme, setTheme] = useState<AvailableThemes>(()=>{
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
    return storageTheme
  })
  
  const toggleTheme = (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    event.preventDefault()
    setTheme(prevTheme =>{
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

  const toggleThemeIcon = {
    dark:   <Lightbulb color="black" size={48} className='cursor-pointer hover:bg-(--primary-dark) duration-300 transition-colors border border-(--gray-700) p-[10px] rounded-lg bg-(--primary)' />, 
    light: <LightbulbOff color="black" size={48} className='cursor-pointer hover:bg-(--primary-dark) duration-300 transition-colors border border-(--gray-700) p-[10px] rounded-lg bg-(--primary)' />

  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      {/* menu de botões */}
       <div className="flex justify-center gap-4 mt-3 mb-6">

       <a href="/">
         <House color="black" size={48} className='cursor-pointer hover:bg-(--primary-dark) duration-300 transition-colors border border-(--gray-700) p-[10px] rounded-lg bg-(--primary)' />
       </a>
       <a href="/history">
         <History color="black" size={48} className='cursor-pointer hover:bg-(--primary-dark) duration-300 transition-colors border border-(--gray-700) p-2.5 rounded-lg bg-(--primary)' />
       </a>
       <a href="/settings">
         <SettingsIcon color="black" size={48} className='cursor-pointer hover:bg-(--primary-dark) duration-300 transition-colors border border-(--gray-700) p-2.5 rounded-lg bg-(--primary)' />
       </a>
       <a href="" onClick={toggleTheme}>
         {toggleThemeIcon[theme]}
       </a>
       
       </div>
    </div>
  )
}

export default MenuButton