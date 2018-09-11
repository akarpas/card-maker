import cardsReducer from '../cards'
import { SAVE_CARD, DELETE_CARD } from '../../actions/types'

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

it('handles action with unknown type', () => {
  const newState = cardsReducer([], { type: 'unknown' })
  expect(newState).toEqual([])
})