import { SAVE_CARD, DELETE_CARD } from "../actions/types"

const deleteCard = (state, data) => {
  if (state.length === 1) {
    return ([])
  }
  return (state.splice(data.cardNumber, 1))
}

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_CARD:
      return [...state, action.payload]
    case DELETE_CARD:
      return deleteCard(state, action.payload)
    default:
      return state
  }
}