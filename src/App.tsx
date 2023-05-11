import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

// Interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]); //Array dos tarefas

  const deleteTask = (id: number) => {
    //Deletar tarefa
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  //Abrir modal
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <body className="w-100 h-screen flex flex-col justify-between font-inder">
      {isOpen && (
        <Modal
          closeModal={closeModal}
          children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
        />
      )}
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
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            openModal={openModal}
          />
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default App;
