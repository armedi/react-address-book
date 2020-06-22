import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

export type AppState = ReturnType<typeof reducer>

const configureStore = () => {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(reducer, composeWithDevTools(middleWareEnhancer))

  return store
}

export default configureStore
