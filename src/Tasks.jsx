import React from 'react'
import TasksItem from './TasksItem'

export default function Tasks({tasks, onDone, onDelete}){
    return (
        <div className="tasks">
            {tasks.map((task) => (
              <TasksItem
                key={task.id}
                id={task.id}
                name={task.name}
                done={task.done}
                onDone={onDone}
                onDelete={onDelete}
              />
            ))}
        </div>
    )
}