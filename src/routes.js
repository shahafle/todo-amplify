import { Home } from "./pages/Home";
import { TodoApp } from "./pages/TodoApp";

export const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/todo',
        component: <TodoApp />,
    }
]
