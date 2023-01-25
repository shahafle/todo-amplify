import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
//JS
import { setFilter } from '../../store/todo.action';
import { debounce } from '../../services/util.service';
//ASSETS
import { BiSearch } from "react-icons/bi";

export function SearchBar() {

   const { filterBy } = useSelector(state => state.todoModule)
   const [localFilterBy, setLocalFilterBy] = useState(filterBy)
   const debouncedSetFilter = useRef(debounce(setFilter, 1000))

   const handleChange = ({ target: { value } }) => {
      const updatedFilter = { ...localFilterBy, title: value }
      setLocalFilterBy(updatedFilter)
      debouncedSetFilter.current(updatedFilter)
   }

   const onSearch = (ev) => {
      ev.preventDefault()
      debouncedSetFilter.current(localFilterBy)
   }

   return <form className='search-bar' onSubmit={onSearch}>
      <input type="text" onChange={handleChange} value={localFilterBy.title} placeholder="search" />
      <button><BiSearch /></button>
   </form>
}