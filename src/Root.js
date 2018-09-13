import React from "react"
import { Provider } from "react-redux"
import createStore from './store'

export default ({ children }) => {
  return (
    <Provider store={createStore({})}>
      {children}
    </Provider>
  )
}