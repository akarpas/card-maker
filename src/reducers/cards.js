import { SAVE_CARD, DELETE_CARD, EDIT_CARD, ERASE_CARDS, GET_CARDS, FETCH_CARDS, CARDS_LOADING } from "../actions/types"
import CardsJSON from "../assets/cards.json"

const { cards } = CardsJSON
const INITIAL_STATE = {
  cardList: cards,
  cardsLoading: false
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

const setLoading = state => {
  return { ...state, cardsLoading: true }
}
const fetchCards = (state, data) => {
  return { ...state, cardsLoading: false, cardList: data }
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
    case CARDS_LOADING:
      return setLoading(state)
    case FETCH_CARDS:
      return fetchCards(state, action.payload)
    default:
      return state
  }
}