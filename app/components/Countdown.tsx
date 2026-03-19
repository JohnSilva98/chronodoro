interface CountdownProps {
  formattedSeconds: string
}

const Countdown = ({ formattedSeconds }: CountdownProps) => {
  return (
      <div className="flex flex-col items-center justify-center mt-7">
       <h1 className='text-[var(--text-primary)] text-8xl font-bold'>{formattedSeconds}</h1>
       </div>
  )
}

export default Countdown