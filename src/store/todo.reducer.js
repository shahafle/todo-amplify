export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_FILTER = 'SET_FILTER'
export const SET_IS_TODO_LOADING = 'SET_IS_TODO_LOADING'

const initialState = {
   todos: null,
   filterBy: { title: '', isCompleted: '' },
   isTodoLoading: false
}


export function todoReducer(state = initialState, action) {
   switch (action.type) {
      case SET_TODOS:
         return { ...state, todos: [...action.todos], isTodoLoading: action.isTodoLoading }
      case ADD_TODO:
         return { ...state, todos: [action.todo, ...state.todos] }
      case UPDATE_TODO:
         return { ...state, todos: [...state.todos.map(todo => todo.id === action.todo.id ? action.todo : todo)] }
      case REMOVE_TODO:
         return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.todoId)] }
      case SET_FILTER:
         return { ...state, filterBy: { ...action.filterBy } }
      case SET_IS_TODO_LOADING:
         return { ...state, isTodoLoading: action.isTodoLoading }
      default:
         return state
   }
}


