import React from 'react';
import {useStore} from 'outstated';


import useTodo from "./stores/useTodo";

function ListCount(){
  const {list} = useStore(useTodo);
  return(<div>Items: {list.length}</div>);
}

export default ListCount;
