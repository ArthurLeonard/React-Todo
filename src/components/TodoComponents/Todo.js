import React from "react";

const ToDo = props => {
  return (
    <div className={`item${props.todo.completed ? "-purchased" : ""}`}>
      <h3 onClick={() => props.toggleItem(props.todo.id)}>
        {props.todo.task}{" "}
      </h3>
    </div>
  );
}; // end todo component

export default ToDo;

//className = {`item${props.item.purchased ? ' purchased' : ''}`}
//
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
