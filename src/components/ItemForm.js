// import React from "react";
// import { v4 as uuid } from "uuid";
// import { useState } from "react";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />

//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//           <option value="Meat">Meat</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;

import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";


function ItemForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    
    const itemId = uuid();

    const newItem = {
      id:itemId,
      name:name,
      category:category,
    };

    // props.onItemFormSubmit(newItem);
    props.handleAddItem(newItem); 

    setName("");
    setCategory("Produce");
  }

  const itemId = uuid();

  const newItem = {
    id:itemId,
    name:name,
    category:category,
  }
  


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Meat">Meat</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
