import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"
  

  const [newAppClass, setNewAppClass] = useState(false)

  function handleLightMode(e) {
      e.preventDefault()
      setNewAppClass(!newAppClass)
  }
  // const appClasss = newAppClass ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleLightMode}>{newAppClass ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
