import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
//CMPS
import { TodoList } from "../cmps/TodoApp/TodoList";
//JS
import { addTodo, loadTodos, removeTodo, updateTodo } from '../store/todo.action';


export function TodoApp() {

   const navigate = useNavigate()

   const { loggedInUser } = useSelector(state => state.userModule)
   const { todos } = useSelector(state => state.todoModule)

   useEffect(() => {
      if (!loggedInUser) navigate('/')
      else loadTodos()
   }, [])

   const onToggleTodo = async (todoId) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo.isCompleted = !todo.isCompleted
      updateTodo(todo)
   }

   const onUpdateTodo = (todoId, title) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo.title = title
      updateTodo(todo)
   }

   return <main className="todo-app main-layout">
      <div>
         <h1>TodoList</h1>
         < TodoList todos={todos} onToggleTodo={onToggleTodo} onAddTodo={addTodo} onUpdateTodo={onUpdateTodo} onRemoveTodo={removeTodo} />
      </div>
   </main>
}