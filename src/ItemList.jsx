import React, { useState } from "react";
import { useStore } from "outstated";

import useTodo from "./stores/useTodo";

function ItemList() {
  const { list, removeItem, updateItem } = useStore(useTodo);
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
