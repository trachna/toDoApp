import React from "react";
import "./Todo.css";
import {useDispatch} from 'react-redux';
import { completeTask, removeTask} from '../actions'
import finishButton from "../finishButton/finishButton";

function Todo({ todo,location }) {

  const dispatch = useDispatch();

  return (
    <div data-testid="todo-card" className="card-header list_item" style={{maxWidth:"40%"}}>
      <span data-testid="todo-text" style={{textDecoration : ((todo.completed)? "line-through" : "none")}}>{todo.text}</span>
        <button 
            className="btn btn-danger btn-sm" 
            data-testid = "remove-button" 
              onClick={e => {
              e.preventDefault();
              dispatch(removeTask(location));
            }}
          > 
          Remove
        </button>
        <button 
          className="btn btn-success btn-sm" 
          data-testid = "finish-button" 
          onClick={e => {
            e.preventDefault();
            dispatch(completeTask(location));
          }}
          // disabled = {todo.completed}
        > 
        Finish 
        </button>
        {/* <finishButton
          status = {todo.completed}
          location = {location}
        /> */}
    </div>
  );
};

export default Todo;