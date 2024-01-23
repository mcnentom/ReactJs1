import React, { useState } from 'react';
import './app.scss';
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Do laundry', completed: true },
    { id: 3, text: 'Write React app', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    } else {
      alert('Please input a task');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevVal) => prevVal.filter((todo) => todo.id !== id));
  };

  return (
 
      <div className='general-div'>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
              />
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className='input-div'>
          <input type="text" value={newTodo} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
      </div>
  );
};

export default App;
