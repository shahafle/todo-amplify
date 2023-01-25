import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'
import { createTodo, deleteTodo, updateTodo } from '../graphql/mutations'

export const todoService = {
   query,
   add,
   update,
   remove
}

async function query(filterBy) {
   const criteria = _generateCriteria(filterBy)
   const todoData = await API.graphql(graphqlOperation(listTodos, criteria))
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

function _generateCriteria(filterBy) {
   const criteria = { filter: {} }
   criteria.filter.title = { contains: filterBy.title ?? '' }
   return criteria
}