import React from 'react'

export default function Input({name, onAddTask, onSetName}){
    const handleClick = () => {
        onAddTask();
    }

    const handleChange = (e) => {
        onSetName(e.target.value);
    }
  
    return (
        <div className="input-wrapper">
            <input
              type="text"
              value={name}
              onChange={handleChange}
            />
            <button className="add-button" onClick={handleClick}>
              Add
            </button>
        </div>
    )
}
