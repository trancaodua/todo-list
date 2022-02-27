import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn Js fundamental", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);

  const [showIncomlete, setShowIncomplete] = useState(false);

  const [newTask, setnewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setnewTask("");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setnewTask(e.target.value);
  };

  const setTaskStatus = (staskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === staskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get things done" />
      <TaskList
        tasks={tasks}
        showIncomlete={showIncomlete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
