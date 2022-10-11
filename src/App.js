import React from "react";
import { TodoList, ButtonAdd, Popup } from "./components/";

function App() {
  const [popup, setPopup] = React.useState(false);
  const [idItem, setIdItem] = React.useState(1);

  const nowDate = new Date()

  const showPopup = () => {
    setPopup(!popup);
  }

  const hiddenPopup = () => {
    setPopup(!popup);
  }

  return (
    <>
      <div className="bg-[#242132] h-screen w-full text-white">
        <div className=" max-w-4xl m-auto w-full h-[90vh] flex flex-col justify-center py-20 px-4">
          <div className="mb-3 flex justify-between pr-3">
            <h1 className="text-2xl xs:text-3xl ">Todos list</h1>
            <h4 className="text-xl self-end">{nowDate.toDateString()}</h4>
          </div>
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
