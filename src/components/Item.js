import React, {useState} from "react";
 import items from "../data/items";

function Item({ name, category }) {

  const [items, setItems] = useState (false)

  function handleClick(e){
    
    setItems(!items)
  }

  const itemsClass = items ? "in-cart" : ""

  return (
    <li className="">
    <li className={itemsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"> Add to Cart</button>
      <button className="add" onClick={handleClick}>{itemsClass ? "Remove From Cart" : "Add to Cart"}</button>
    </li></li>
  );
}

export default Item;
