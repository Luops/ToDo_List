import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Interfaces
import { ITask } from "./interfaces/Task";

function App() {
  return (
    <body className="w-100 h-screen flex flex-col justify-between font-inder">
      <Header />
      <main className="w-100 flex flex-col min-h-[60vh] justify-start items-center py-5 gap-5 text-black text-center">
        <div className="w-[500px]">
          <h2 className="font-bold text-xl">O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default App;
