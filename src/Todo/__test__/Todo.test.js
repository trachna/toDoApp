import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import allReducers from './../../reducers';
import Todo from "./../Todo";

// var toDoList = createStore(allReducers);


// afterEach(() => {
//   cleanup();
// })

// describe('renders items without crashing', () => {

//   beforeEach(() => {
//     render(<Provider store={toDoList}><Todo {...{todo:{text : 'Welcome to To-Do List!!', completed:false}, location:1}} /></Provider>);
//   })

//   test('todo card', () => {
//     const toDoCardElement = screen.getByTestId("todo-card");
//     expect(toDoCardElement).toBeInTheDocument();
//   });
  
//   test('finish button', () => {
//       const FinishButtonElement = screen.getByTestId("finish-button");
//       expect(FinishButtonElement).toHaveTextContent("Finish");
//   });
  
//   test('remove button', () => {
//       const RemoveButtonElement = screen.getByText("Remove");
//       expect(RemoveButtonElement).toHaveClass("btn-danger");
//   });

// })

// describe('buttons work properly', () => {
  
//   beforeEach(() => {
//     render(<Provider store={toDoList}><Todo {...{todo:{text : 'Welcome to To-Do List!!', completed:false}, location:0}} /></Provider>);
//   })

//   test('finish button strikes off the item on list', () => {
//     fireEvent.click(screen.getByText("Finish"));
//     const ListElement = screen.getByTestId("todo-text")
//     // debugger
//     // const ListElement = new Array(3).fill(jest.fn());
//     console.log(ListElement)
//     // fireEvent.click(screen.getByText("Finish"))
//     expect(ListElement).toHaveStyle("text-decoration: line-through")
//   })
// })

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    todo : {
              text : 'Welcome to To-Do List!!', 
              completed:false
            }, 
    location : 1
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Todo {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Todo Card', () => {
  it('should render a card with the text of the Todo and the corresponding buttons', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
    expect(enzymeWrapper.find('.card-header').containsMatchingElement(<button>Finish</button>)).toBe(true);
    expect(enzymeWrapper.find('span').text()).toBe(props.todo.text);
    expect(enzymeWrapper.find('.btn-danger').text()).toBe('Remove');
    expect(enzymeWrapper.find('.btn-danger')).toBeDisabled(true)
    // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
    //  expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
  });
});

describe('Check the functioning of the Buttons', () => {
  it('finish button strikes off the task', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    const button = enzymeWrapper.find('button'.text()).toBe('Finish');
    button.simulate('click');
    expect(enzymeWrapper.state().todo[props.location].completed).toBe(false);
    // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
    //  expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
  });

  it('remove button strikes off the task', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    var len = enzymeWrapper.state().todo.length;
    const button = enzymeWrapper.find('button'.text()).toBe('Remove');
    button.simulate('click');
    expect(enzymeWrapper.state().todo.length).toEqual(len-1);
    // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
    //  expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
  });
});