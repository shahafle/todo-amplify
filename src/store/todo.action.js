import { todoService } from '../services/todo.service.js'
import { store } from '../store'
import { ADD_TODO, REMOVE_TODO, SET_FILTER, SET_IS_TODO_LOADING, SET_TODOS, UPDATE_TODO } from '../store/todo.reducer.js'

export async function loadTodos() {
   try {
      store.dispatch({ type: SET_IS_TODO_LOADING, isTodoLoading: true })
      const todos = await todoService.query(store.getState().todoModule.filterBy)
      store.dispatch({ type: SET_TODOS, todos })
   } catch (err) {
      store.dispatch({ type: SET_IS_TODO_LOADING, isTodoLoading: false })
      console.log('failed to get todos', err)
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

export async function removeTodo(todoId) {
   await todoService.remove(todoId)
   store.dispatch({ type: REMOVE_TODO, todoId: todoId })
}

export async function setFilter(filterBy) {
   store.dispatch({ type: SET_FILTER, filterBy })
   loadTodos()
}