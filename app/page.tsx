'use client'

import MenuButton from "./components/MenuButton";
import MainForm from "./components/MainForm";
import Countdown from "./components/Countdown";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Bounce, ToastContainer } from "react-toastify";

export default function Home() {


  return (
    <TaskContextProvider>
    <div className="flex justify-center h-full">
      <main className="w-full h-full">
        <MenuButton />
        <Countdown />
        <MainForm />
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}

/>
      </main>
    </div>
    </TaskContextProvider>
  );
}