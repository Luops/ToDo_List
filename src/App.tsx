import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="w-100 h-screen flex flex-col justify-between font-inder">
      <Header />
      <main className="w-100 flex flex-col min-h-[60vh] justify-center items-center py-5 gap-5 text-black text-center">
        <div>
          <h2>O que você vai fazer?</h2>
          <p>Formulário</p>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <p>Lista</p>
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default App;
