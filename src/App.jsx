import { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//CMPS
import { AppHeader } from './cmps/AppHeader';
//JS
import { checkAuthGuard, routes } from './router';
import { loadLoggedInUser } from './store/user.action';

function App() {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    loadLoggedInUser()
  }, [])

  useEffect(() => {
    checkAuthGuard(location.pathname, navigate)
  }, [location])

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
    </div>
  );
}

export default App;
