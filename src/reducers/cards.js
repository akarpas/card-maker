import { SAVE_CARD, DELETE_CARD, EDIT_CARD, ERASE_CARDS, GET_CARDS } from "../actions/types"
import CardsJSON from "../assets/quotes.json"

const { cards } = CardsJSON
const INITIAL_STATE = {
  cardList: cards
}

const saveCard = (state, data) => {
  return { ...state, cardList: [ ...state.cardList, data ] }
}

const deleteCard = (state, data) => {
  if (state.cardList.length === 1) {
    return ([])
  }
  state.cardList.splice(data.cardNumber, 1)
  return { ...state, cardList: [ ...state.cardList ] }
}

const editCard = (state, data) => {
  state.cardList[data.cardNumber].text = data.text
  return { ...state, cardList: [ ...state.cardList ] }
}

const eraseCards = state => {
  return { ...state, cardList: [] }
}

const getCards = state => {
  const { cards } = CardsJSON
  return { ...state, cardList: cards }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SAVE_CARD:
      return saveCard(state, action.payload)
    case DELETE_CARD:
      return deleteCard(state, action.payload)
    case EDIT_CARD:
      return editCard(state, action.payload)
    case ERASE_CARDS:
      return eraseCards(state)
    case GET_CARDS:
      return getCards(state)
    default:
      return state
  }
}