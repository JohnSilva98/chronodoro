import { House, History, Settings as SettingsIcon, Lightbulb, LightbulbOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
    dark:   <Lightbulb color="black" size={48} className='cursor-pointer hover:bg-(--btn-primary-hover) duration-300 transition-colors border border-(--gray-700) p-[10px] rounded-lg bg-(--btn-primary)' />, 
    light: <LightbulbOff color="black" size={48} className='cursor-pointer hover:bg-(--btn-primary-hover) duration-300 transition-colors border border-(--gray-700) p-[10px] rounded-lg bg-(--btn-primary)' />

  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      {/* menu de botões */}
       <div className="flex justify-center gap-4 mt-3 mb-6">

       <Link href="/">
         <House color="black" size={48} className='cursor-pointer hover:bg-(--btn-primary-hover) duration-300 transition-colors border border-(--gray-700) p-2.5 rounded-lg bg-(--btn-primary)' />
       </Link>
       <Link href="/history">
         <History color="black" size={48} className='cursor-pointer hover:bg-(--btn-primary-hover) duration-300 transition-colors border border-(--gray-700) p-2.5 rounded-lg bg-(--btn-primary)' />
       </Link>
       <Link href="/settings">
         <SettingsIcon color="black" size={48} className='cursor-pointer hover:bg-(--btn-primary-hover) duration-300 transition-colors border border-(--gray-700) p-2.5 rounded-lg bg-(--btn-primary)' />
       </Link>
       <a href="" onClick={toggleTheme}>
         {toggleThemeIcon[theme]}
       </a>
       
       </div>
    </div>
  )
}

export default MenuButton