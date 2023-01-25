import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
//JS
import { setFilter } from '../store/todo.action';
import { logout } from '../store/user.action';
import { debounce } from '../services/util.service';
//ASSETS
import logo from '../assets/imgs/logo.svg';
import { BiSearch } from "react-icons/bi";

export function AppHeader() {

   const location = useLocation()
   const navigate = useNavigate()
   const { loggedInUser } = useSelector(state => state.userModule)
   const { filterBy } = useSelector(state => state.todoModule)
   const [localFilterBy, setLocalFilterBy] = useState(filterBy)
   const debouncedSetFilter = useRef(debounce(setFilter, 1000))

   const onLogout = async () => {
      await logout()
      navigate('/')
   }

   const handleChange = ({ target: { value } }) => {
      const updatedFilter = { ...localFilterBy, title: value }
      setLocalFilterBy(updatedFilter)
      debouncedSetFilter.current(updatedFilter)
   }

   if (location.pathname === '/') return
   return <header className='app-header main-layout'>
      <section className='content'>
         <img src={logo} className="logo" alt="logo" />

         <form>
            <input type="text" onChange={handleChange} value={localFilterBy.title} placeholder="search" />
            <button><BiSearch /></button>
         </form>

         {loggedInUser && <button className='logout' onClick={onLogout}>Logout</button>}
      </section>
   </header>
}