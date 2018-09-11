import {
  SAVE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  ERASE_CARDS,
  GET_CARDS
} from './types'

export function saveCard(data) {
  return {
    type: SAVE_CARD,
    payload: data
  }
}

export function deleteCard(cardNumber) {
  return {
    type: DELETE_CARD,
    payload: cardNumber
  }
}

export function editCard(cardNumber) {
  return {
    type: EDIT_CARD,
    payload: cardNumber
  }
}

export function eraseCards(cardNumber) {
  return {
    type: ERASE_CARDS,
    payload: null
  }
}

export function getCards() {
  return {
    type: GET_CARDS,
    payload: null
  }
}