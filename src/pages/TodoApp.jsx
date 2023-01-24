import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { ComposeTodo } from '../cmps/TodoApp/ComposeTodo';
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
      {loggedInUser && <h1>Hi, {loggedInUser.username}</h1>}
      <ComposeTodo addTodo={addTodo} />

      <section className='todo-group'>
         <h4>Tasks</h4>
         {!todos.length ? <p className='empty-list'>No tasks have been created yet, add your first task above</p>
            : <TodoList todos={todos} onToggleTodo={onToggleTodo} onUpdateTodo={onUpdateTodo} onRemoveTodo={removeTodo} />}
      </section>

   </main>
}