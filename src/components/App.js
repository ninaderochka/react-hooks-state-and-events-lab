import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [ dark, setDark ] = useState('')
  const [ light, setLight ] = useState('')
  const appClass = {dark} ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <div className="App dark">
{setDark}
</div>

<div className="App light">
{setLight}
</div>
      <header>
        <h2>Shopster</h2>
        <button onClick={setDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
