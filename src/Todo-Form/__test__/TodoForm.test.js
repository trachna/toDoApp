import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import allReducers from './../../reducers';
import TodoForm from './../TodoForm';

var toDoList = createStore(allReducers);

beforeEach(() => {
  render(<Provider store={toDoList}><TodoForm /></Provider>);
})

describe('renders components properly', () =>{

  test('renders todo form without crashing', () => {
    const toDoFormElement = screen.getByTestId("form-wrapper");
    expect(toDoFormElement).toBeInTheDocument();
  });
  
  test('renders input box without crashing', () => {
      const inputBoxElement = screen.getByPlaceholderText("Add a new task");
      expect(inputBoxElement).toBeInTheDocument();
  });
  
  test('renders add item button without crashing', () => {
      const addItemElement = screen.getByTestId("add-item-button");
      expect(addItemElement).toBeInTheDocument();
  });
  
})

describe('check the working of the form', () => {

  test('renders add item button without crashing', () => {
    const addItemElement = screen.getByTestId("add-item-button");
    // expect(addItemElement).toBeDisabled();
  });

  // test('add button becomes active after typing', () => {
  //   const inputBoxElement = screen.getByTestId("input-box");
  //   if(inputBoxElement.value!=''){
  //     const addItemElement = screen.getByTestId("add-item-button");
  //     expect(addItemElement).toBeEnabled();
  //   }
  // })

  // test('input value becomes empty after clicking add button', () => {
  //   // const addItemElement = screen.getByTestId("add-item-button");
  //   screen.getByTestId("add-item-button").click();
  //   expect(screen.getByTestId("input-box")).toHaveValue("Hello")
  // })
})