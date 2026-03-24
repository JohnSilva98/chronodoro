import { useTaskContext } from '../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../utils/GetNextCycle'
import { getNextCycleType } from '../utils/GetNextCycleType'

export function Cicles() {
  const { state } = useTaskContext()

  const cycleStep = Array.from({ length: state.currentCycle })

  const cycleColors = {
    workTime: 'bg-[var(--success)]',
    shortBreak: 'bg-[var(--warning)]',
    longBreak: 'bg-[var(--long-rest)]',
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span>Ciclos:</span>
      <div className="flex items-center justify-center gap-2">
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle)
          return (
            <span
              aria-label={`Ciclo ${index + 1}: ${nextCycleType}`}
              key={index}
              className={`w-4 h-4 rounded-full ${cycleColors[nextCycleType]}`}
            ></span>
          )
        })}
      </div>
    </div>
  )
}