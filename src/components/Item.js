import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [ item, addItem ] = useState(false)

function handleClick(event) {
addItem (!item)
}

  return (
    <li className={item ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={item ? "remove" : "add"} onClick={handleClick}>{item ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
