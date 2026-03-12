'use client'

import MenuButton from "./components/MenuButton";
import Footer from "./components/Footer"; 
import MainForm from "./components/MainForm";
import Countdown from "./components/Countdown";
import Heading from "./components/Heading";

export default function Home() {
 
  
  
 
  return (
    <div className=" flex justify-center ">
      {/* cabeçalho da pagina */}
      <main className=" w-full h-screen" style={{background: 'var(--gradient-main)'}} >
        <Heading />
       {/* menu de botões */}
       <MenuButton />
       {/* contador */}
       <Countdown />
       {/* formulario principal */}
       <MainForm />
      
      <Footer />
      </main>
    </div>
  );
}