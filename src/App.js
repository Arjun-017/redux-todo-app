import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import TodoInput from './components/TodoInput';
import Todos from './components/Todos';



function App() {

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
