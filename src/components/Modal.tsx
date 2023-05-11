import React, { useState } from "react";

import TaskList from "./TaskList";

interface Props {
  children: React.ReactNode; // Padrão
  closeModal: () => void
}

const Modal = ({ children, closeModal }: Props) => {
  return (
    <div className="">
      {/*Fade*/}
      <div
        className="w-[100%] h-[100%] absolute bg-[#000] opacity-30"
        onClick={closeModal}
      ></div>
      {/*Modal*/}
      <div className="absolute top-[10%] left-0 right-0 m-[0_auto] w-[500px] h-[400px] z-10 px-5 bg-[#fff] flex flex-col justify-center text-center">
        <h2 className="mb-[1em] font-bold text-xl">Edite sua Tarefa!</h2>
        {children} {/*Pegar o mesmo formulário por children*/}
      </div>
    </div>
  );
};

export default Modal;
