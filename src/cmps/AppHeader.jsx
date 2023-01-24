import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
//ASSETS
import logo from '../assets/imgs/check.png';
import { logout } from '../store/user.action';

export function AppHeader() {

   const navigate = useNavigate()
   const { loggedInUser } = useSelector(state => state.userModule)

   const onLogout = async () => {
      await logout()
      navigate('/')
   }

   return <header className='app-header main-layout'>
      <section className='content'>
         <Link className='logo-container' to='/'>
            <img src={logo} className="logo" alt="logo" />
            <span>Do-it.</span>
         </Link>

         <nav>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">My Todos</NavLink> */}
            {loggedInUser && <button onClick={onLogout}>Logout</button>}
         </nav>
      </section>
   </header>
}