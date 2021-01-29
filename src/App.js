import './App.css';
import React from 'react';
import { useSelector } from "react-redux";
import Todo from './Todo/Todo';
import ToDoForm from './Todo-Form/TodoForm';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  var todos = useSelector(state => state.tasks);

  return (
    <div >
      <ToDoForm />
      <div data-testid="wrapper" className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            location = {index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
