import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectClass, setSelectClass ] = useState("All")
  const [item, setItem] = useState(items)

  const categoryDisplay = item.filter((data) => {
    if (selectClass === "All") {
      return true
    } else {
      return data.category = selectClass
    }
  })

  function selectedClass (e) {
    setSelectClass(e.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
        {/* <select name="filter" onChange={selectedClass}> */}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
