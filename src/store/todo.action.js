import { todoService } from '../services/todo.service.js'
import { store } from '../store'
import { ADD_TODO, SET_TODOS } from '../store/todo.reducer.js'

export async function loadTodos() {
   try {
      const todos = await todoService.query()
      store.dispatch({ type: SET_TODOS, todos })
   } catch (err) {
      console.log('no logged in user', err)
   }
}

export async function addTodo(title) {
   try {
      const todo = await todoService.add(title)
      console.log(todo)
      store.dispatch({ type: ADD_TODO, todo })
   } catch (err) {
      console.log('no logged in user', err)
   }
}
