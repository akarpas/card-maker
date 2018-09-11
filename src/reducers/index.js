import { combineReducers } from "redux"
import cardsReducer from "./cards"
import { reducer as formReducer } from "redux-form"
import { CARD_CREATED } from "../actions/types.js"

const form = formReducer.plugin({
  create: (state, action) => {
    switch(action.type) {
      case CARD_CREATED:
        return undefined
      default:
        return state
    }
  }
})

export default combineReducers({ cards: cardsReducer, form })