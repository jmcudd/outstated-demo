import React from "react";
import { useStore } from "outstated";
import moment from "moment";

import useTodo from "./stores/useTodo";

function LastUpdated() {
  const { lastUpdated } = useStore(useTodo);
  return (<div>{lastUpdated && 
    moment(lastUpdated, "X").format("YYYY-MM-DD hh:mm:ss")
    }
  </div>);
}
export default LastUpdated;
