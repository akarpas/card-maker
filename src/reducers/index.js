import { combineReducers } from "redux"
import cardsReducer from "./cards"
import formsReducer from "./forms"

export default combineReducers({ cards: cardsReducer, form: formsReducer })