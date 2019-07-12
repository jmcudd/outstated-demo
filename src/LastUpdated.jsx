import React from "react";
import { useStore } from "outstated";

import useTodo from "./stores/useTodo";

function LastUpdated() {
  const { lastUpdated } = useStore(useTodo);
  return (<div>{lastUpdated && 
    lastUpdated.format("YYYY-MM-DD hh:mm:ss")
    }
  </div>);
}
export default LastUpdated;
