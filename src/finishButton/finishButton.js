// import React from "react";
// import "./../Todo/Todo.css";
// import {useDispatch} from 'react-redux';
// import {completeTask} from '../actions'

// function finishButton({ status, location }) {

//   const dispatch = useDispatch();
  
//   return (
//       <div>
//         <button 
//           className="btn btn-success btn-sm" 
//           data-testid = "finish-button" 
//           onClick={e => {
//             e.preventDefault();
//             dispatch(completeTask(location));
//           }}
//           disabled = {status}
//         > 
//         Finish 
//         </button> 
//         </div>
//   )

// }

// export default finishButton;

import React from "react";
import "./../Todo/Todo.css";
import {useDispatch} from 'react-redux';
import {completeTask} from '../actions'


function finishButton({ status,location }) {

  const dispatch = useDispatch();

  return (
    <div>
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
    </div>
  );
};

export default finishButton;