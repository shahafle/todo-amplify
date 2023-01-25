export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
   todos: [],
   filterBy: { title: '' }
}


export function todoReducer(state = initialState, action) {
   switch (action.type) {
      case SET_TODOS:
         return { ...state, todos: [...action.todos] }
      case ADD_TODO:
         return { ...state, todos: [action.todo, ...state.todos] }
      case UPDATE_TODO:
         return { ...state, todos: [...state.todos.map(todo => todo.id === action.todo.id ? action.todo : todo)] }
      case REMOVE_TODO:
         return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.todoId)] }
      case SET_FILTER:
         return { ...state, filterBy: { ...action.filterBy } }
      default:
         return state
   }
}


