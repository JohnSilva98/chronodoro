export function Cicles() {

    const cycles = [
  'work',
  'short',
  'work',
  'short',
  'work',
  'short',
  'work',
  'long',
];

    const cycleColors = {
  work: 'bg-[var(--success)]',
  short: 'bg-[var(--warning)]',
  long: 'bg-[var(--long-rest)]',
};
    return (
        <div className="flex flex-col items-center justify-center ">
           <span>Ciclos:</span>

           <div className="flex items-center justify-center gap-2 ">
                {cycles.map((type, index) => (
                    <span
                      key={index}
                      className={`w-4 h-4 rounded-full ${cycleColors[type]}`}
                    ></span>
                  ))}
           </div>
        </div>
        
    )
}