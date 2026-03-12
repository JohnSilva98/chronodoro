'use client'

import MenuButton from "./components/MenuButton";
import Footer from "./components/Footer"; 
import MainForm from "./components/MainForm";
import Countdown from "./components/Countdown";
import Heading from "./components/Heading";

export default function Home() {
 
  
  
 
  return (
    <div className="flex justify-center h-full">
      <main className="w-full h-full" style={{background: 'var(--gradient-main)'}} >
        {/* menu de botões */}
        <MenuButton />
        {/* contador */}
        <Countdown />
        {/* formulario principal */}
        <MainForm />
      </main>
    </div>
  );
}