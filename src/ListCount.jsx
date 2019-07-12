import React from 'react';
import {useStore} from 'outstated';


import todo from "./stores/todo";

function ListCount(){
  const {list} = useStore(todo);
  return(<div>Items: {list.length}</div>);
}

export default ListCount;
