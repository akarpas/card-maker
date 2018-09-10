import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import CardsJSON from "../src/assets/cards.json"

const { cards } = CardsJSON

export default ({ children, initialState = { cards } }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}