import { useState } from "react";

export default function Screen({ state }) {
  const calcObject = document.querySelector(".App");
  const [drag, setDrage] = useState(false);
  function handleMouseClickDown() {
    setDrage(true);
  }
  function handleMouseClickUp() {
    setDrage(false);
  }
  function handleDrag(e) {
    if (!drag) return;
    calcObject.style.cursor = "grabbing";
    calcObject.style.left = e.clientX - 50 + "px";
    calcObject.style.top = e.clientY + 150 + "px";
  }
  return (
    <div
      onMouseDown={handleMouseClickDown}
      onMouseUp={handleMouseClickUp}
      onMouseMove={(e) => handleDrag(e)}
      className="screen"
      draggable={false}
    >
      <p draggable={true} className="previous-operations">
        {state.previousResult}
      </p>
      <p draggable={true} className="current-operation">
        {state.currentScreen}
      </p>
    </div>
  );
}
