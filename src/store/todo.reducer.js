export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'

const initialState = {
   todos: []
}


export function todoReducer(state = initialState, action) {
   switch (action.type) {
      case SET_TODOS:
         return { ...state, todos: [...action.todos] }
      case ADD_TODO:
         return { ...state, todos: [...state.todos, action.todo] }
      default:
         return state
   }
}


