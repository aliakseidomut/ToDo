import React, { useState } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sorts from "./Sorts";
import Filter from "./Filter";
import Input from "./Input";
import Tasks from "./Tasks";

function App(){

  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [doneTasksNum, setDoneTasksNum] = useState(0);
  const [leftTasksNum, setLeftTasksNum] = useState(0);
  const [allTasksNum, setAllTasksNum] = useState(0);
  const [sort, setSort] = useState('new');
  const [filter, setFilter] = useState(false);
  
  const handleSetName = (name) => {
    setName(name);
  };

  const handleAddTask = () => {
    const task = {
      id: Date.now(),
      name: name.trim(),
      done: false
    };

    if (task.name) {
      setName('');
      setTasks([...tasks, task]);
      setAllTasksNum(allTasksNum + 1);
      setLeftTasksNum(leftTasksNum + 1);
    } else {
      toast.error("Enter a task", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  };

  const handleSetDone = (done, id, name) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, name, done } : task
    );

    const newDoneTasksNum = newTasks.filter((task) => task.done).length;

    setDoneTasksNum(newDoneTasksNum);
    setLeftTasksNum(allTasksNum - newDoneTasksNum);

    setTasks(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    const newAllTasksNum = allTasksNum - 1;
    const newDoneTasksNum = newTasks.filter((task) => task.done).length;
    const newLeftTasksNum = newAllTasksNum - newDoneTasksNum;

    setAllTasksNum(newAllTasksNum);
    setDoneTasksNum(newDoneTasksNum);
    setLeftTasksNum(newLeftTasksNum);

    setTasks(newTasks);
  };

  const hadleSetSort = (sort) => {
    setSort(sort);
  }

  const handleSetFilter = (filter) => {
    setFilter(filter);
  }

  let newTasks = filter ? tasks.filter(el => !el.done) : tasks;
  newTasks = 
    sort === 'alphabet'
    ? newTasks.sort((a, b) => a.name.localeCompare(b.name)) : sort === 'old' 
    ? newTasks.sort((a, b) => a.id - b.id) : sort === 'new' 
    ? newTasks.sort((a, b) => b.id - a.id) : '';

  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header
        allTasksNum={allTasksNum}
        doneTasksNum={doneTasksNum}
        leftTasksNum={leftTasksNum}
      />
      <Sorts onSort={hadleSetSort} sort={sort} />
      <Filter onFilter={handleSetFilter} filter={filter} />
      <Input name={name} onAddTask={handleAddTask} onSetName={handleSetName} />
      <Tasks tasks={newTasks} onDone={handleSetDone} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
