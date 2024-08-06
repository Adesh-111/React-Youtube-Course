import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["WakeUp", "Code Daily", "Eat"]);
  const [newTask, setNewTask] = useState("");

  function handleTasks(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTodos((t) => [...t, newTask]);

      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...todos];

      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTodos(updateTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < todos.length - 1) {
      const downTasks = [...todos];

      [downTasks[index + 1], downTasks[index]] = [
        downTasks[index],
        downTasks[index + 1],
      ];
      setTodos(downTasks);
    }
  }

  return (
    <>
      <div className="TodoList">
        <h1>ToDoList</h1>
        <div>
          <input
            type="text"
            placeholder="Enter the Task"
            value={newTask}
            onChange={handleTasks}
          />
          <button className="add-button" onClick={addTask}>
            Add task
          </button>
        </div>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={() => moveTaskUp(index)} className="move-button">
                UP
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="down-button"
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
