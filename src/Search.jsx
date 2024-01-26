import React from 'react'
import './styling.scss'
const Search = ({search, handleSearch}) => {
  return (
    <div className='input-div'>
    <input type="text"
        placeholder="Search by country's name"
        value={search}
        onChange={handleSearch}
    />
</div>
  )
}

export default Search