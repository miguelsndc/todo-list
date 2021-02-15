import React from 'react';

import './Todo.css';

import trashIconSrc from '../assets/icons/delete.svg';

import { ACTIONS } from '../actions';

function Todo({ todo, dispatch }) {
  function handleToggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  }

  return (
    <article>
      <div>
        <label class="container">
          <input type="checkbox" onClick={handleToggle} />
          <span class="checkmark"></span>
          <span>{todo.name}</span>
        </label>

        {/* <button onClick={handleToggle}>Toggle</button> */}
      </div>
      <button onClick={handleDelete} className="deleteBtn">
        <img src={trashIconSrc} alt="trash" />
      </button>
    </article>
  );
}

export default Todo;
