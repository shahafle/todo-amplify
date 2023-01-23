import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { todoReducer } from './todo.reducer.js'

import { userReducer } from './user.reducer.js'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose()

const rootReducer = combineReducers({
   userModule: userReducer,
   todoModule: todoReducer
})

export const store = createStore(rootReducer, middleware)
