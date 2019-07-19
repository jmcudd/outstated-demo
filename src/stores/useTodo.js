import { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import moment from "moment";

function useTodo() {
  const [lastUpdated, setLastUpdated] = useState(
    moment("2019-07-12 05:31:18").format("X")
  );
  const [list, setList] = useState([
    {
      id: "1",
      description: "Take out the trash",
      created: moment("2019-07-12 02:23:18").format("X")
    },
    {
      id: "2",
      description: "Do the dishes",
      created: moment("2019-07-12 02:17:12").format("X")
    },
    {
      id: "3",
      description: "Get an oil change.",
      created: moment("2019-07-12 05:01:18").format("X")
    }
  ]);

  function addItem(description) {
    if (description) {
      const newItem = {
        id: uuidv4(),
        description,
        created: moment().format("X")
      };
      setList(list.concat(newItem));
      setLastUpdated(moment().format("X"));
    }
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
    setLastUpdated(moment().format("X"));
  }

  function removeItem(item) {
    setList(
      list.map(i => {
        if (i === item) {
          return {
            ...i,
            completed: moment().format("X")
          };
        } else {
          return i;
        }
      })
    );
    setLastUpdated(moment().format("X"));
  }

  useEffect(() => {
    //Just for debugging purposes.
    console.groupCollapsed("State: " + moment().format("HH:mm:ss.SSS"));

    console.log("list", list);
    console.log("lastUpdated", lastUpdated);

    console.groupEnd();
  });

  return { list, addItem, updateItem, removeItem, lastUpdated };
}

export default useTodo;
