import React, { useState } from "react";
import { useStore } from "outstated";

import todo from "./stores/todo";

function AddItemField(){
  const { addItem } = useStore(todo);
  const [description, setDescription] = useState("");
  return(<div>
      <input
        type="text"
        onChange={e => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button
        onClick={() => {
          addItem(description);
          setDescription("");
        }}
      >
        Add Item
      </button>
 
  </div>);
}

export default AddItemField;

