'use client'

import MenuButton from "./components/MenuButton";
import MainForm from "./components/MainForm";
import Countdown from "./components/Countdown";
import { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";
import { TaskContext } from "./contexts/TaskContext/page";

export default function Home() {

  const initialState: TaskStateModel = {
    tasks:[],
    secondsRemaining: 0,
    formattedSeconds: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 25,
      shortBreak: 5,
      longBreak: 15
    }
  }

  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{chave:321}}>
    <div className="flex justify-center h-full">
      <main className="w-full h-full">
        <MenuButton />
        <Countdown />
        <MainForm />
      </main>
    </div>
    </TaskContext.Provider>
  );
}