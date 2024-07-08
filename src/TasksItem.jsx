import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function TasksItem ({id, name, done, onDelete, onDone}) {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleCheck = (e) => {
    const done = e.target.checked;
    onDone(done, id, name);
  };
  
  const addZeroInBegin = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  const getTime = () => {
    const date = new Date(id);
    const year = date.getFullYear();
    const month = addZeroInBegin(date.getMonth() + 1);
    const day = addZeroInBegin(date.getDate());
    const hours = addZeroInBegin(date.getHours());
    const minutes = addZeroInBegin(date.getMinutes());
    const seconds = addZeroInBegin(date.getSeconds());

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div
      className={
          done
          ? "tasks-item_done"
          : "tasks-item"
      }
    >
      <input
        className={"checkbox"}
        id={id}
        type="checkbox"
        checked={done}
        onChange={handleCheck}
      />
      <label htmlFor={id}></label>
      <span>{name}</span>
      <button className="delete-button" onClick={handleDelete}>
        <BsFillTrash3Fill />
      </button>
      <span className="date-item">{getTime()}</span>
    </div>
  );
}
