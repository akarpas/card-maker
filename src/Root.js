import React from "react"
import { Provider } from "react-redux"
import createStore from './store'

export default ({ children, initialState }) => {
  return (
    <Provider store={createStore(initialState)}>
      {children}
    </Provider>
  )
}