import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]); //Array dos afazeres

  return (
    <body className="w-100 h-screen flex flex-col justify-between font-inder">
      <Header />
      <main className="w-100 flex flex-col min-h-[60vh] justify-start items-center py-5 gap-5 text-black text-center">
        <div className="w-[500px]">
          <h2 className="font-bold text-xl">O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            /*a taskList do App.tsx é igual ao do taskForm */
          />
        </div>
        <div className="w-[500px] overflow-y-auto scrollbar-hidden">
          <h2 className="font-bold text-xl">Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default App;
