import { useEffect } from "react"
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
//CMPS
import { AppHeader } from './cmps/AppHeader';
//JS
import { routes } from './routes';
import { store } from './store';
import { loadLoggedInUser } from './store/user.action';

function App() {


  useEffect(() => {
    loadLoggedInUser()
  }, [])


  return (
    <Provider store={store}>

      <HashRouter>
        <div className="App">
          <AppHeader />
          <Routes>
            {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
