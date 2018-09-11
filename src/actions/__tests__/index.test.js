import { saveCard, deleteCard, editCard, eraseCards, getCards } from '../index'
import { SAVE_CARD, DELETE_CARD, EDIT_CARD, ERASE_CARDS, GET_CARDS } from '../types'

describe('saveCard', () => {
  it('has the correct type', () => {
    const action = saveCard()
    expect(action.type).toEqual(SAVE_CARD)
  })

  it('has the correct payload', () => {
    const card = {
      text: 'new card',
      author: 'new author',
      emoji: 'smiley'
    }
    const action = saveCard(card)
    expect(action.payload).toEqual(card)
  })
})

describe('deleteCard', () => {
  it('has the correct type', () => {
    const action = deleteCard()
    expect(action.type).toEqual(DELETE_CARD)
  })

  it('has the correct payload', () => {
    const cardNumber = 0
    const action = deleteCard(cardNumber)
    expect(action.payload).toEqual(cardNumber)
  })
})

describe('editCard', () => {
  it('has the correct type', () => {
    const action = editCard()
    expect(action.type).toEqual(EDIT_CARD)
  })

  it('has the correct payload', () => {
    const cardNumber = 0
    const action = editCard(cardNumber)
    expect(action.payload).toEqual(cardNumber)
  })
})

describe('eraseCards', () => {
  it('has the correct type', () => {
    const action = eraseCards()
    expect(action.type).toEqual(ERASE_CARDS)
  })

  it('has the correct payload', () => {
    const action = eraseCards()
    expect(action.payload).toEqual(null)
  })
})

describe('getCards', () => {
  it('has the correct type', () => {
    const action = getCards()
    expect(action.type).toEqual(GET_CARDS)
  })

  it('has the correct payload', () => {
    const action = getCards()
    expect(action.payload).toEqual(null)
  })
})