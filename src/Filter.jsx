import React from 'react'

export default function Filter({filter, onFilter}){
  const handleFilter = (e) => {
    onFilter(e.target.checked);
  }
  
  return (
    <div className='filter'>
        <input className='checkbox' type="checkbox" id='filter' onChange={handleFilter} />
        <label className={filter ? 'filter-button_active' : 'filter-button'} htmlFor="filter">Only not completed</label>
    </div>
  )
}