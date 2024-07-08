import React from 'react'

export default function Header({allTasksNum, doneTasksNum, leftTasksNum}){
  return (
    <header>
      <span className='all-tasks'>All: {allTasksNum}</span>
      <span className='done-tasks'>Done: {doneTasksNum}</span>
      <span className='left-tasks'>Left: {leftTasksNum}</span>
    </header>
  )
}

