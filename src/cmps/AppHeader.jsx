import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
//JS
import { logout } from '../store/user.action';
//CMPS
import { TodoFilter } from './TodoApp/TodoFilter';
//ASSETS
import logo from '../assets/imgs/logo.svg';


export function AppHeader() {

   const location = useLocation()
   const navigate = useNavigate()
   const { loggedInUser } = useSelector(state => state.userModule)

   const onLogout = async () => {
      await logout()
      navigate('/')
   }


   if (location.pathname === '/') return
   return <header className='app-header main-layout'>
      <section className='content'>
         <img src={logo} className="logo" alt="logo" />

         <TodoFilter />
         {loggedInUser && <button className='logout' onClick={onLogout}>Logout</button>}
      </section>
   </header>
}