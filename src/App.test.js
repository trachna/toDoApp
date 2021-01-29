import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App';
import { createStore } from "redux";
import allReducers from './reducers';

var toDoList = createStore(allReducers);

test('renders learn react link', () => {
  render(<Provider store={toDoList}><App /></Provider>);
  const wrapperElement = screen.getByTestId("wrapper");
  expect(wrapperElement).toBeInTheDocument();
});
