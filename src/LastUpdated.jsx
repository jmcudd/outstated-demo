import React from "react";
import { useStore } from "outstated";

import todo from "./stores/todo";

function LastUpdated() {
  const { lastUpdated } = useStore(todo);
  return (<div>{lastUpdated && 
    lastUpdated.format("YYYY-MM-DD hh:mm:ss")
    }
  </div>);
}
export default LastUpdated;
