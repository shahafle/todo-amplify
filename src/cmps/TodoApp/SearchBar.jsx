import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//JS
import { setFilter } from '../../store/todo.action';
//ASSETS
import { BiSearch } from "react-icons/bi";

export function SearchBar() {

   const { filterBy } = useSelector(state => state.todoModule)
   const [localFilterBy, setLocalFilterBy] = useState(filterBy)

   useEffect(() => {
      setFilter(localFilterBy)
   }, [localFilterBy])

   const handleChange = ({ target: { name, value } }) => {
      setLocalFilterBy({ ...localFilterBy, [name]: value })
   }

   const onSearch = (ev) => {
      ev.preventDefault()
      setFilter(localFilterBy)
   }

   return <div className='todo-filter'>
      <form className='search-bar' onSubmit={onSearch}>
         <input type="text" name="title" onChange={handleChange} value={localFilterBy.title} placeholder="search" />
         <button><BiSearch /></button>
      </form>

      <select name="isCompleted" onChange={handleChange}>
         <option value="">All</option>
         <option value="open">Open</option>
         <option value="completed">Completed</option>
      </select>
   </div>
}