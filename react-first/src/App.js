import React from 'react';
import TodoList from './todo/TodoList'

function App() {

  const todos = [
    { id: 1, completed: false, title: 'Yeah!!!' },
    { id: 2, completed: false, title: 'Все работает' },
    { id: 3, completed: false, title: 'Все работает' },
    { id: 4, completed: false, title: 'Все работает' }
  ]

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
