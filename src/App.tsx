import React, { useEffect, useState } from 'react';
import './App.css';
import { Item } from './store/type';
import AddList from './components/List/AddList';
import ListItem from './components/List/ListItem';

function App() {
  const saveItem = localStorage["todos"] ? JSON.parse(localStorage.getItem("todos") || "")
  : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  })
  
  return (
    <div className="App">
     <AddList items={items} setItems={setItems} />
     <ListItem items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
