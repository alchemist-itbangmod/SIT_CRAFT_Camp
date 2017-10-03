import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// Ducks store
import register from './register'

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const initStore = (initialState = {}) => {
  return createStore(
    combineReducers({
      register
    }),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      devtools
    )
  )
}
