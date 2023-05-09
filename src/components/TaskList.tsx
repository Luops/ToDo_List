import React from "react";

// icons
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

// interfaces
import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
};

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="w-100 flex justify-between items-center py-2 border-b border-[rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col">
              <h4 className="text-left font-bold">{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="flex flex-col items-center gap-5 mr-4">
              <i className="text-lg cursor-pointer text-white bg-[#282c34] p-[8px] hover:text-[#61dafb] ease-in-out duration-300">
                <FaPencilAlt />
              </i>
              <i className="text-2xl cursor-pointer text-white bg-[#282c34] p-[5px] hover:text-[#61dafb] ease-in-out duration-300">
                <MdDeleteForever />
              </i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
