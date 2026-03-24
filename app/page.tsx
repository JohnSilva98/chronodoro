'use client'

import MenuButton from "./components/MenuButton";
import MainForm from "./components/MainForm";
import Countdown from "./components/Countdown";
import { TaskContextProvider } from "./contexts/TaskContext/page";

export default function Home() {


  return (
    <TaskContextProvider>
    <div className="flex justify-center h-full">
      <main className="w-full h-full">
        <MenuButton />
        <Countdown />
        <MainForm />
      </main>
    </div>
    </TaskContextProvider>
  );
}