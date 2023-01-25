import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ComposeTodo } from '../cmps/TodoApp/ComposeTodo';
import { SearchBar } from '../cmps/TodoApp/SearchBar';
//CMPS
import { TodoList } from "../cmps/TodoApp/TodoList";
//JS
import { addTodo, loadTodos, removeTodo, updateTodo } from '../store/todo.action';

export function TodoApp() {
   const { loggedInUser } = useSelector(state => state.userModule)
   const { todos, filterBy } = useSelector(state => state.todoModule)

   useEffect(() => {
      if (loggedInUser) loadTodos()
   }, [loggedInUser])

   const onToggleTodo = (todoId) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo.isCompleted = !todo.isCompleted
      updateTodo(todo)
   }

   const onUpdateTodo = (todoId, title) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo.title = title
      updateTodo(todo)
   }

   const getDoneCount = () => {
      return todos.reduce((acc, todo) => {
         if (todo.isCompleted) acc++
         return acc
      }, 0)

   }

   return <main className="todo-app main-layout">
      <div className='mobile-search'>
         <SearchBar />
      </div>
      {loggedInUser && <h1>Hi, {loggedInUser.username}</h1>}
      <ComposeTodo addTodo={addTodo} />

      <section className='todo-group'>
         <h4>Tasks {!!todos?.length && `${getDoneCount()}/${todos.length}`}</h4>
         {!todos && <p>Loading your tasks...</p>}
         {todos && !todos.length && !filterBy.title && <p className='empty-list'>No tasks have been created yet, add your first task above</p>}
         {todos && !todos.length && filterBy.title && <p className='empty-list'>No results matching your search</p>}
         {!!todos?.length && <TodoList todos={todos} onToggleTodo={onToggleTodo} onUpdateTodo={onUpdateTodo} onRemoveTodo={removeTodo} />}
      </section >

   </main >
}