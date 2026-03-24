import { useTaskContext } from "../contexts/TaskContext/useTaskContext"


const Countdown = () => {
  const {state} = useTaskContext()
  
  return (
      <div className="flex flex-col items-center justify-center mt-7">
       <h1 className='text-(--text-primary) text-8xl font-bold'>{state.formattedSeconds}</h1>
       </div>
  )
}

export default Countdown