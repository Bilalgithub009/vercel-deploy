import React, { useState } from 'react';

function TodoItem({ todo, removeTodo, editTodo, toggleEditing }) {
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newText);
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => toggleEditing(todo.id)}>Cancel</button>
        </form>
      ) : (
        <>
          <span>{todo.text}</span>
          <button className='bg-red-500' onClick={() => toggleEditing(todo.id)}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
