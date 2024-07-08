import React from 'react'

export default function Sorts({sort, onSort}){
  const handleSetSort = (e) => {
    onSort(e.target.id);
  }
  
  return (
    <div className='sorts'>
        <input type='radio' name='sorts' id='alphabet' onChange={handleSetSort} checked={sort === 'alphabet'}/>
        <label className={sort === 'alphabet' ? 'sort-button_active' : 'sort-button'} htmlFor="alphabet">In alphabet order</label>
        
        <input type='radio' name='sorts' id='new' onChange={handleSetSort} checked={sort === 'new'}/>
        <label className={sort === 'new' ? 'sort-button_active' : 'sort-button'} htmlFor="new">New ones first</label>
        
        <input type='radio' name='sorts' id='old' onChange={handleSetSort} checked={sort === 'old'}/>
        <label className={sort === 'old' ? 'sort-button_active' : 'sort-button'} htmlFor="old">Old ones first</label>
    </div>
  )
}