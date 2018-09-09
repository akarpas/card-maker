import {
  SAVE_CARD
} from './types'

export function saveCard(data) {
  return {
    type: SAVE_CARD,
    payload: data
  }
}