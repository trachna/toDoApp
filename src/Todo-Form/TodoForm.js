import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../actions';
import './todoform.css'

function ToDoForm() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTask(value));
        setValue("Hello");
    }

    return (
        <form data-testid="form-wrapper" onSubmit={handleSubmit} style={{margin : "5%"}}>
            <input
                type="text"
                data-testid="input-box"
                className="form-control"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
                style={{margin : "1%", maxWidth : "50%", marginLeft : "auto" , marginRight : "auto"}}
            />
            <button 
                data-testid="add-item-button" 
                className="btn btn-lg btn-primary"
                disabled = {!value}
            >
                Add To List
            </button>
        </form>
    );
}

export default ToDoForm;