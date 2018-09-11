import cardsReducer from '../cards'
import {
  SAVE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  GET_CARDS,
  ERASE_CARDS
} from '../../actions/types'
import QuotesJSON from '../../assets/quotes.json'

it('handles actions of type SAVE_CARD', () => {
  const card = {
    text: 'new card',
    author: 'new author',
    emoji: 'smiley'
  }
  const action = {
    type: SAVE_CARD,
    payload: card
  }
  const newState = cardsReducer([], action)
  expect(newState).toEqual([card])
})

it('handles actions of type DELETE_CARD', () => {
  const cardNumber = 1
  const initialCards = [
    {
      text: 'keep this card',
      author: 'important',
      emoji: 'smiley'
    },
    {
      text: 'delete this card',
      author: 'trash',
      emoji: 'smiley'
    }
  ]
  const action = {
    type: DELETE_CARD,
    payload: cardNumber
  }
  const newState = cardsReducer(initialCards, action)
  expect(newState).toEqual([initialCards[0]])
})

it('handles actions of type EDIT_CARD', () => {
  const cardNumber = 1
  const payload = {
    cardNumber,
    text: 'card has been edited'
  }
  const initialCards = [
    {
      text: 'keep this card',
      author: 'important',
      emoji: 'smiley'
    },
    {
      text: 'edit this card',
      author: 'edit',
      emoji: 'smiley'
    }
  ]
  const action = {
    type: EDIT_CARD,
    payload
  }
  const newState = cardsReducer(initialCards, action)
  expect(newState[cardNumber].text).toEqual(payload.text)
})

it('handles actions of type GET_CARDS', () => {
  const { cards } = QuotesJSON
  const action = {
    type: GET_CARDS,
    payload: null
  }
  const newState = cardsReducer([], action)
  expect(newState).toEqual(cards)
})


it('handles actions of type ERASE_CARDS', () => {
  const initialCards = [
    {
      text: 'delete this card',
      author: 'trash',
      emoji: 'smiley'
    },
    {
      text: 'delete this card',
      author: 'trash',
      emoji: 'smiley'
    }
  ]
  const action = {
    type: ERASE_CARDS,
    payload: null
  }
  const newState = cardsReducer(initialCards, action)
  expect(newState).toEqual([])
})

it('handles action with unknown type', () => {
  const newState = cardsReducer([], { type: 'unknown' })
  expect(newState).toEqual([])
})