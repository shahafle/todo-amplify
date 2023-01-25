import { Home } from "./pages/Home";
import { TodoApp } from "./pages/TodoApp";
import { store } from "./store";

export const routes = [
    {
        path: '/',
        component: <Home />,
        meta: {
            isPublic: true
        }
    },
    {
        path: '/todo',
        component: <TodoApp />,
    }
]

export async function checkAuthGuard(targetRoute, navigate) {

    const route = routes.find(route => route.path === targetRoute)
    if (!route) navigate('/')
    const isPublic = route.meta?.isPublic

    const { loggedInUser, loggedUserPrm } = store.getState().userModule
    let user = loggedInUser

    if (loggedUserPrm) {
        user = await loggedUserPrm
    }

    if (isPublic && user) {
        return navigate('/todo')
    }

    if (!isPublic && !user) {
        return navigate('/')
    }
}