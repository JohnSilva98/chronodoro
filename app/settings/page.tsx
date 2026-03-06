"use client"
import { House, History, Settings as SettingsIcon, Lightbulb } from "lucide-react";
import { useState } from "react";


 


import Toastify from 'toastify-js'
import MenuButton from "../components/MenuButton";

export default function Settings() {

     const [focusTime, setFocusTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)


    const handleSave = () => {
        Toastify({
            text: "Configurações salvas com sucesso! 🎉",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)", 
              width: "350px",
            },
            
          }).showToast();
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#052e16]">
  
  <div className="flex flex-col items-center">
    <h1 className="text-[#e5e7eb] text-3xl font-bold mb-4">Configurações</h1>

      {/* menu de botões */}
      <MenuButton />

    <form className="flex flex-col justify-center mb-5">
      <label>Tempo de foco</label>
      <input
        className="bg-[#0f172a] text-[#e5e7eb] rounded-lg p-2 w-[200px] border-b-2 border-[#1a7a20e6] mb-5"
        type="number"
        value={focusTime}
        onChange={(e) => setFocusTime(parseInt(e.target.value))}
      />

      <label>Tempo de pausa curta</label>
      <input
        className="bg-[#0f172a] text-[#e5e7eb] rounded-lg p-2 w-[200px] border-b-2 border-[#1a7a20e6] mb-5"
        type="number"
        value={shortBreakTime}
        onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
      />

      <label>Tempo de pausa longa</label>
      <input
        className="bg-[#0f172a] text-[#e5e7eb] rounded-lg p-2 w-[200px] border-b-2 border-[#1a7a20e6] mb-5"
        type="number"
        value={longBreakTime}
        onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
      />

      <button
        onClick={handleSave}
        className="bg-[#1a7a20e6] text-white rounded-lg p-2 w-[200px] mt-4 cursor-pointer"
      >
        Salvar
      </button>
    </form>
  </div>

</div>
  )
}
