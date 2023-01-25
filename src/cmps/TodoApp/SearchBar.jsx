import { useState } from 'react';
import { useSelector } from 'react-redux';
//JS
import { setFilter } from '../../store/todo.action';
//ASSETS
import { BiSearch } from "react-icons/bi";

export function SearchBar() {

   const { filterBy } = useSelector(state => state.todoModule)
   const [localFilterBy, setLocalFilterBy] = useState(filterBy)

   const handleChange = ({ target: { value } }) => {
      setLocalFilterBy({ ...localFilterBy, title: value })
   }

   const onSearch = (ev) => {
      ev.preventDefault()
      setFilter(localFilterBy)
   }

   return <form className='search-bar' onSubmit={onSearch}>
      <input type="text" onChange={handleChange} value={localFilterBy.title} placeholder="search" />
      <button><BiSearch /></button>
   </form>
}