import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'
import { createTodo } from '../graphql/mutations'

export const todoService = {
   query,
   add
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