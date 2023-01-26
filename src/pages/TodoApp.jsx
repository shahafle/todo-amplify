import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ComposeTodo } from '../cmps/TodoApp/ComposeTodo';
import { EmptyList } from '../cmps/TodoApp/EmptyList';
import { TodoFilter } from '../cmps/TodoApp/TodoFilter';
//CMPS
import { Loader } from "../cmps/Loader";
import { TodoList } from "../cmps/TodoApp/TodoList";
//JS
import { addTodo, loadTodos, removeTodo, updateTodo } from '../store/todo.action';

export function TodoApp() {
   const { loggedInUser } = useSelector(state => state.userModule)
   const { todos, filterBy } = useSelector(state => state.todoModule)

   useEffect(() => {
      if (loggedInUser) loadTodos()
   }, [loggedInUser])

   // const onToggleTodo = (todoId) => {
   //    const todo = todos.find(todo => todo.id === todoId)
   //    todo.isCompleted = !todo.isCompleted
   //    updateTodo(todo)
   // }

   const onUpdateTodo = (todoId, field, value) => {
      const todo = todos.find(todo => todo.id === todoId)
      todo[field] = value
      updateTodo(todo)
   }

   const getDoneCount = () => {
      return todos.reduce((acc, todo) => {
         if (todo.isCompleted) acc++
         return acc
      }, 0)
   }

   return <main className="todo-app main-layout">
      <TodoFilter />
      {loggedInUser && <h1>Hi, {loggedInUser.username}</h1>}
      <ComposeTodo addTodo={addTodo} />

      <section className='todo-group'>
         <h4>Tasks {!!todos?.length && `${getDoneCount()}/${todos.length}`}</h4>

         {!todos && <Loader />}
         {todos && !todos.length && <EmptyList isFiltered={!!filterBy.title} />}
         {!!todos?.length && <TodoList todos={todos} onUpdateTodo={onUpdateTodo} onRemoveTodo={removeTodo} />}
      </section >

   </main >
}