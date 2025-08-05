//todo list using the basic react properties

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [Todo, setTodo] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = (event) => {
    setNewTodo(event.target.value);
  };

  let addTodo = () => {
    let newid = uuidv4();
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: newid, isDone: false }];
    });
  };

  function deleteTodo(id) {
    console.log(id);
    // var newTodoList = Todo.filter((Todo) => Todo.id != id);
    // setTodo(newTodoList);

    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
  }

  //   function upperCaseOne(id) {
  //     setTodo((prevTodo) =>
  //       prevTodo.map((todo) => {
  //         if (todo.id === id) {
  //           return { ...todo, task: todo.task.toUpperCase() };
  //         } else {
  //           return todo;
  //         }
  //       })
  //     );
  //   }

  //   let upperCaseAll = () => {
  //     setTodo((prevTodo) =>
  //       prevTodo.map((todo) => {
  //         return { ...todo, task: todo.task.toUpperCase() };
  //       })
  //     );
  //   };

  //   let lowerCaseAll = () => {
  //     setTodo((prevTodo) =>
  //       prevTodo.map((todo) => {
  //         return { ...todo, task: todo.task.toLowerCase() };
  //       })
  //     );
  //   };

  let markDoneOne = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: (todo.isDone = true) };
        } else {
          return todo;
        }
      })
    );
  };

  let markUndone = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: (todo.isDone = false) };
        } else {
          return todo;
        }
      })
    );
  };

  let markDoneAll = () => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.isDone == false) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <label htmlFor="todo">Enter the work:</label>
      <input
        type="text"
        id="todo"
        placeholder="example: study"
        onChange={addNewTask}
      />
      <br /> <br />
      <button onClick={addTodo}>Add</button>
      <br /> <br />
      <h2>Tasks for Todo:</h2>
      <ul>
        {Todo.map((todo) => (
          <li
            key={todo.id}
            style={
              todo.isDone
                ? { textDecoration: "line-through", color: "red" }
                : { textDecoration: "none", color: "green" }
            }
          >
            <span>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}> Delete</button>
            {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button> */}
            <button onClick={() => markDoneOne(todo.id)}>Mark as Done</button>
            <button onClick={() => markUndone(todo.id)}>Mark as Undone</button>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => upperCaseAll()}>UpperCase All</button>
      <br />
      <br />
      <button onClick={() => lowerCaseAll()}>LowerCase All</button> */}
      <button onClick={markDoneAll}>Mark as Done All</button>
    </div>
  );
}

export default Todo;
