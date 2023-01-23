import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'

import { TodoList } from "../cmps/TodoApp/TodoList";

import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';
import { addTodo, loadTodos } from '../store/todo.action';


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
      // const updatedTodo = await API.graphql(graphqlOperation(UpdateTodo, { input: todo }))
   }

   const onAddTodo = (title) => {
      addTodo(title)
   }


   return <main className="todo-app main-layout">
      <div>
         <h1>TodoList</h1>
         < TodoList todos={todos} toggleTodo={toggleTodo} onAddTodo={onAddTodo} />
      </div>
   </main>
}