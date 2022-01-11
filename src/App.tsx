import React, { useState } from 'react';
import * as  Component from './App-styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name:'Tarefas', done: false},
  ]);


  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
   }
  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item,index)=>(
          <ListItem key={index} item={item}/>
          ))}
      </Component.Area>
    </Component.Container>
  );
}

export default App;
