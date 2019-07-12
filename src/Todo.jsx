import React from "react";

import AddItemField from "./AddItemField";
import ItemList from "./ItemList";
import LastUpdated from "./LastUpdated";
import ListCount from "./ListCount";


function Todo() {
  return (
    <div>
      <ListCount />
      <LastUpdated />
      <ItemList />
      <AddItemField />
    </div>
  );
}
export default Todo;
