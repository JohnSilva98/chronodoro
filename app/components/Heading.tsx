
import { Timer } from 'lucide-react'

const Heading = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
        <Timer color="#1a7a20e6" size={48} className='mb-1' />
         <h1 className="text-[var(--text-primary)] text-3xl font-bold mb-1">Chronodoro</h1>
        <p className="text-[var(--text-secondary)] text-2xl">Pomodoro tracker</p>
        </div>
  )
}

export default Heading