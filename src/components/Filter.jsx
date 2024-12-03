import React from 'react'

export default function Filter({ filter, setFilter, setSort }) {
  return (
    <div className='filter'>
      <h2> Filter: </h2>

      <div className='filter-options'>
        <div>
          <p> Status: </p>

          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All"> Todos </option>
            <option value="Completed"> Completed </option>
            <option value="Incompleted"> Incompleted </option>
          </select>
        </div>

        <div>
          <p> ordem alfabética: </p>

          <button onClick={() => setSort('Asc')}> Asc </button>

          <button onClick={() => setSort('Desc')}> Dsc </button>
        </div>
      </div>
    </div>
  )
}