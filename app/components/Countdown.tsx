import { TaskContext, useTaskContext } from "../contexts/TaskContext/page"


const Countdown = () => {
  const {state, setState} = useTaskContext()
  console.log(TaskContext)
  return (
      <div className="flex flex-col items-center justify-center mt-7">
       <h1 className='text-[var(--text-primary)] text-8xl font-bold'>{state.formattedSeconds}</h1>
       </div>
  )
}

export default Countdown