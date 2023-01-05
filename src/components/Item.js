import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [ item, addItem ] = useState('')
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
