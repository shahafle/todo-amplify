import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'
import { createTodo, deleteTodo, updateTodo } from '../graphql/mutations'

export const todoService = {
   query,
   add,
   update,
   remove
}

async function query() {
   const todoData = await API.graphql(graphqlOperation(listTodos))
   return todoData.data.listTodos.items
}

async function add(title) {
   const todo = {
      title,
      isCompleted: false
   }
   const todoData = await API.graphql(graphqlOperation(createTodo, { input: todo }))
   return todoData.data.createTodo
}

async function update(todo) {
   const { id, title, isCompleted } = todo
   const todoData = await API.graphql(graphqlOperation(updateTodo, { input: { id, title, isCompleted } }))
   return todoData.data.updateTodo
}

async function remove(todoId) {
   const todoData = await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }))
   return todoData.data.deleteTodo
}