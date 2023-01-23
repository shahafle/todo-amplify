import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
//CMPS
import { TodoList } from "../cmps/TodoApp/TodoList";
//JS
import { addTodo, loadTodos, updateTodo } from '../store/todo.action';


export function TodoApp() {

   const navigate = useNavigate()

   const { loggedInUser } = useSelector(state => state.userModule)
   const { todos } = useSelector(state => state.todoModule)

   useEffect(() => {
      if (!loggedInUser) navigate('/')
      else loadTodos()
   }, [])

   const toggleTodo = async (todoId) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo.isCompleted = !todo.isCompleted
      updateTodo(todo)
   }


   return <main className="todo-app main-layout">
      <div>
         <h1>TodoList</h1>
         < TodoList todos={todos} toggleTodo={toggleTodo} onAddTodo={addTodo} />
      </div>
   </main>
}