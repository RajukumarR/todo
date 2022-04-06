import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 
 return (
   <div className="App">
     <Header />
   </div>
 );
}
 
export default App;