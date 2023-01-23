import { todoService } from '../services/todo.service.js'
import { store } from '../store'
import { ADD_TODO, REMOVE_TODO, SET_TODOS, UPDATE_TODO } from '../store/todo.reducer.js'

export async function loadTodos() {
   try {
      const todos = await todoService.query()
      store.dispatch({ type: SET_TODOS, todos })
   } catch (err) {
      console.log('no logged in user', err)
   }
}

export async function addTodo(title) {
   const todo = await todoService.add(title)
   store.dispatch({ type: ADD_TODO, todo })
}

export async function updateTodo(todo) {
   const updatedTodo = await todoService.update(todo)
   store.dispatch({ type: UPDATE_TODO, todo: updatedTodo })
}

export async function removeTodo(title) {
   const todo = await todoService.remove(title)
   store.dispatch({ type: REMOVE_TODO, todoId: todo.id })
}
