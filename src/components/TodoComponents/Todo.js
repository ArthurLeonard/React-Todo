import React from "react";

const ToDo = props => {
  return  <div>
            <h3>{props.todo.task}  </h3>
              <h3>{props.todo.id}</h3>
          </div >;
}; // end todo component

export default ToDo;

// import React from 'react';

// const Todo = props => {
//   return (
//     <div
//       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//       onClick={() => props.handleToggleComplete(props.todo.id)}
//     >
//       {props.todo.task}
//     </div>
//   );
// };

// export default Todo;
