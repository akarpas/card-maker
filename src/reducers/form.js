import { CARD_CREATED } from "../actions/types"
import { reducer as formReducer } from "redux-form"

const form = formReducer.plugin({
  create: (state, action) => {
    switch(action.type) {
      case CARD_CREATED:
        return undefined
      default:
        return state
    }
  }
})

export default form