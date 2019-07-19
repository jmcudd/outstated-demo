import React from "react";
import { Provider } from "outstated";

import Todo from "./Todo";

import useTodo from "./stores/useTodo";

function App() {
  return (
    <Provider stores={[useTodo]}>
      <h3>Outstated</h3>
      <Todo />
    </Provider>
  );
}

export default App;
