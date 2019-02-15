import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        // onChange={props.handleTodoChange}
        onChange={props.handleChanges}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Enter an activity "
      />
      <button onClick={props.addToDo} type="submit">
        Add To do
      </button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}; // end ToDoForm component

export default ToDoForm;

// import React from 'react';
// const TodoForm = props => {
//   return (
//     <form>
//       <input
//         onChange={props.handleTodoChange}
//         type="text"
//         name="todo"
//         value={props.value}
//         placeholder="...todo"
//       />
//       <button onClick={props.handleAddTodo}>Add Todo</button>
//       <button onClick={props.handleClearTodos}>Clear Completed</button>
//     </form>
//   );
// };

// export default TodoForm;
