import React, { useReducer, useState } from 'react';

import Todo from './Todo/';
import { reducer } from './reducer';
import { ACTIONS } from './actions';

import './App.css';

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setHasError(true);
    } else {
      setHasError(false);
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName('');
    }
  }

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {hasError && (
        <div className="error-warning">Type Something in the text field.</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Todos..."
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <section className="todo-list">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </section>
    </div>
  );
}

export default App;
