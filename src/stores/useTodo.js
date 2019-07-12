import { useState } from "react";
import uuidv4 from "uuid/v4";
import moment from "moment";

function useTodo() {
  const [lastUpdated, setLastUpdated] = useState(moment("2019-07-12 05:31:18"));
  const [list, setList] = useState([
    { id: "1", description: "Take out the trash" },
    { id: "2", description: "Do the dishes" },
    { id: "3", description: "Get an oil change." }
  ]);

  function addItem(description) {
    const newItem = {
      id: uuidv4(),
      description
    };
    setList(list.concat(newItem));
    setLastUpdated(moment());
  }

  function updateItem(item) {
    const newList = list.map(i => {
      if (item.id === i.id) {
        return item;
      } else {
        return i;
      }
    });
    setList(newList);
    setLastUpdated(moment());
  }

  function removeItem(item) {
    setList(list.filter(i => i !== item));
    setLastUpdated(moment());
  }

  return { list, addItem, updateItem, removeItem, lastUpdated };
}

export default useTodo;
