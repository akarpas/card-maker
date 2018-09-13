import { createStore, combineReducers } from 'redux'
import reducers from "../src/reducers"

const combinedReducers = combineReducers(reducers)

export default function(initialState) {
  const store = createStore(combinedReducers, initialState)

  return store
}

