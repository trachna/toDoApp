import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import allReducers from './../../reducers';
import Todo from "./../Todo";

var toDoList = createStore(allReducers);


afterEach(() => {
  cleanup();
})

describe('renders items without crashing', () => {

  beforeEach(() => {
    render(<Provider store={toDoList}><Todo {...{todo:{text : 'Welcome to To-Do List!!', completed:false}, location:1}} /></Provider>);
  })

  test('todo card', () => {
    const toDoCardElement = screen.getByTestId("todo-card");
    expect(toDoCardElement).toBeInTheDocument();
  });
  
  test('finish button', () => {
      const FinishButtonElement = screen.getByTestId("finish-button");
      expect(FinishButtonElement).toHaveTextContent("Finish");
  });
  
  test('remove button', () => {
      const RemoveButtonElement = screen.getByText("Remove");
      expect(RemoveButtonElement).toHaveClass("btn-danger");
  });

})

describe('buttons work properly', () => {
  
  beforeEach(() => {
    render(<Provider store={toDoList}><Todo {...{todo:{text : 'Welcome to To-Do List!!', completed:false}, location:0}} /></Provider>);
  })

  test('finish button strikes off the item on list', () => {
    fireEvent.click(screen.getByText("Finish"))
    const ListElement = screen.getByTestId("todo-text")
    // debugger
    console.log(ListElement)
    // fireEvent.click(screen.getByText("Finish"))
    expect(ListElement).toHaveStyle("text-decoration: line-through")
  })
})
