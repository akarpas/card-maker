import axios from "axios"
import _ from "lodash"
import {
  SAVE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  ERASE_CARDS,
  GET_CARDS,
  CARD_CREATED,
  FETCH_CARDS,
  CARDS_LOADING
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

export function getCards() {
  return {
    type: GET_CARDS,
    payload: null
  }
}

export function eraseCards() {
  return {
    type: ERASE_CARDS,
    payload: null
  }
}

export const fetchCards = dispatch => {
  dispatch({
    type: CARDS_LOADING,
    payload: null
  })

  const url = `https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
  axios.get(url).then(response => {
    const { data } = response

    const emojies = ['smiley','sad','angry']
    const parsedCards = _.map(data.quotes, oneQuote => {
      const { author, quote } = oneQuote
      const index = Math.floor((Math.random() * 3));

      return {
        text: quote,
        author,
        emoji: emojies[index]
      }
    })

    return dispatch({
      type: FETCH_CARDS,
      payload: parsedCards
    })
  })

}

export function clearForm() {
  return {
    type: CARD_CREATED,
    payload: null
  }
}