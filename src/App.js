import React from "react";
import { TodoList, ButtonAdd, Popup } from "./components/";

function App() {
  const [popup, setPopup] = React.useState(false);
  const [idItem, setIdItem] = React.useState(1);

  const showPopup = () => {
    setPopup(!popup);
  }

  const hiddenPopup = () => {
    setPopup(!popup);
  }

  return (
    <>
      <div className="bg-[#242132] h-screen w-full text-white">
        <div className=" max-w-4xl m-auto w-full h-screen flex flex-col justify-center py-20 px-4">
          <h1 className=" text-3xl mb-3">Todos list</h1>
          <TodoList />
          <ButtonAdd showPopup={showPopup} />
        </div>
      </div>
      {
        popup && <Popup idItem={idItem} setIdItem={setIdItem} hiddenPopup={hiddenPopup} />
      }
    </>
  );
}

export default App;
