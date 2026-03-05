import {Timer, History, Lightbulb, Settings} from 'lucide-react'

export default function Home() {
  return (
    <div className=" flex justify-center ">
      {/* cabeçalho da pagina */}
      <main className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#052e16] w-full h-screen">
        <div className="mt-10 p1 flex flex-col items-center justify-center">
        <Timer color="#1a7a20e6" size={58} className='mb-5' />
         <h1 className="text-[#e5e7eb] text-4xl font-bold mb-3">Chronodoro</h1>
        <p className="text-[#9ca3af] text-2xl">Pomodoro tracker</p>
        </div>
       {/* menu de botões */}
       <div className="flex justify-center gap-4 mt-10">
        <History color="white" size={48} className='cursor-pointer hover:bg-[#22c55e] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
        <Settings color="white" size={48} className='cursor-pointer hover:bg-[#22c55e] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
        <Lightbulb color="white" size={48} className='cursor-pointer hover:bg-[#22c55e] duration-300 transition-colors border border-[#1f2937] p-[10px] rounded-lg bg-[#1a7a20]' />
       </div>
       {/* contador */}
      </main>
    </div>
  );
}