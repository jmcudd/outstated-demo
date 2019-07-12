import React, { useState } from "react";
import { useStore } from "outstated";

import todo from "./stores/todo";

function ItemList() {
  const { list, removeItem, updateItem } = useStore(todo);
  return (
    <div>
      {list &&
        list.map((item, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                value={item.description}
                onChange={e => {
                  updateItem({ ...item, description: e.target.value });
                }}
              />
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          );
        })}
    </div>
  );
}
export default ItemList;
