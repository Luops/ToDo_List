import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Interfaces
import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //Alterar um state de uma lista. Enviar quando precisar (?)
};

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  //Função de adicionar
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Não deixa enviar o formulário em branco

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]); // Unido todas os afazeres

    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  //Função de coletar os dados
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value); // Enviar para o State do title o valor inserido no input do título
    } else {
      setDifficulty(parseInt(e.target.value)); // Enviar para o State do difficulty o valor inserido no input da dificuldade em forma de número
    }
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="w-[100%] flex flex-col justify-center gap-[1.5em]"
    >
      <div className="w-100 flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-bold self-start">
          Título:
        </label>
        <input
          type="text"
          name="title"
          onChange={handleChange} //Quando mudar, fazer algo (Função)
          value={title}
          placeholder="Título da tarefa"
          className="border-[1px] p-1 pl-2 border-black placeholder:text-[rgba(0,0,0,0.45)]"
        />
      </div>
      <div className="w-100 flex flex-col gap-2">
        <label htmlFor="difficulty" className="text-lg font-bold self-start">
          Dificuldade:
        </label>
        <input
          type="text"
          name="difficulty"
          onChange={handleChange} //Quando mudar, fazer algo (Função)
          value={difficulty}
          placeholder="Dificuldade da tarefa"
          className="border-[1px] p-1 pl-2 border-black placeholder:text-[rgba(0,0,0,0.45)]"
        />
      </div>
      <input
        type="submit"
        value={btnText}
        className="w-100 py-2 bg-[#61dafb] border-[1px] border-[#37a5c4] drop-shadow-[0_0_10px_#888] cursor-pointer hover:bg-black hover:text-white hover:border-black ease-in-out duration-300"
      />
    </form>
  );
};

export default TaskForm;
