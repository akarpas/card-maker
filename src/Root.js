import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import QuotesJSON from "../src/assets/quotes.json"

const { cards } = QuotesJSON

export default ({ children, initialState = { cards } }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}