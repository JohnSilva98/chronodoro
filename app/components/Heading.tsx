import { Timer } from 'lucide-react'

interface HeadingProps {
  title?: string
  subtitle?: string
}

const Heading = ({ title = "Chronodoro", subtitle = "Pomodoro tracker" }: HeadingProps) => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
        <Timer color="#1a7a20e6" size={48} className='mb-1' />
      <a href="/">
        <h1 className="text-(--text-default) text-3xl font-bold mb-1">{title}</h1>
        <p className="text-(--text-muted) text-2xl">{subtitle}</p>
      </a>
    </div>
  )
}

export default Heading