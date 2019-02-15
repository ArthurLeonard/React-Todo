import React from "react";
import ToDo from "./components/TodoComponents/Todo";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Pick up my toys",
    id: 1528099999999,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      tasks: tasks,

      task: "",
      id: "",
      completed: false
    }; //end this.state
  } //end constructor

  addToDo = e => {
    e.preventDefault();
    console.log("inside addtodo method");
    console.log(e.target);
    // setState with new student at the end of the array
    // .push() us === :)...  React === :(
    // .concat
    const newToDo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newToDo]
    });
  };

  handleChanges = e => {
    console.log("inside handleChanges method");
    console.log(e.target.value);
    //     this.setState({ name: e.target.value })
    this.setState({
      task: e.target.value
    });
    console.log(this.state.task);
  };

  // takes itemId as parameter
  toggleItem = itemId => {
    console.log(this.state.tasks[2].completed);

    this.setState({
      tasks: this.state.tasks.map(tido => {
        // console.log(tido.id);
        // console.log(tido.task);
        if (tido.id === itemId) {
          return {
            task: tido.task,
            id: tido.id,
            completed: !tido.completed
          };
        } //endif
        else return tido;
      }) //end map
    }); // end setState()
    console.log(itemId);
  }; // end toggleItem()

  clearCompleted = e => {
    e.preventDefault();
    console.log("in clearComplete method");
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  }; // end clearCompleted()

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className="mapped-todos">
          {this.state.tasks.map(task => (
            <ToDo todo={task} toggleItem={this.toggleItem} />
          ))}
        </div>

        <ToDoForm
          // toggleItem = {this.toggleItem}
          clearCompleted={this.clearCompleted}
          addToDo={this.addToDo}
          name={this.state.name}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
