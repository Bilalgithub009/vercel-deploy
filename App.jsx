import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, isEditing: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText, isEditing: false } : todo));
  };

  const toggleEditing = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  return (
  
    
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleEditing={toggleEditing}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;