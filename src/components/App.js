import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [ isDark, setIsDark ] = useState(false)

  function handleClick(event) {
setIsDark (!isDark)
  }
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <div className="App dark">
</div>

<div className="App light">
</div>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
