import React from "react";
import { Provider } from "outstated";

import Todo from "./Todo";
import ListCount from "./ListCount";
import LastUpdated from "./LastUpdated";

import todo from "./stores/todo";

function App() {
  return (
    <Provider stores={[todo]}>
      <h3>Outstated</h3>
      <Todo />
    </Provider>
  );
}

export default App;
