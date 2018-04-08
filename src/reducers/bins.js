import {DECREMENT_CONTDOWN, RESET_CONTDOWN, SHUFFLE_BINS, TIME_BIN_SHUFFLE} from '../utils/constants'

const bins = (state = {
  countdown: TIME_BIN_SHUFFLE,
  sort: ['red','green','blue']
}, action) => {
  switch (action.type) {
    case DECREMENT_CONTDOWN:
      return {
        ...state,
        countdown: state.countdown - 1
      }
    case RESET_CONTDOWN:
      return {
        ...state,
        countdown: TIME_BIN_SHUFFLE
      }
    case SHUFFLE_BINS:
      return {
        ...state,
        sort: action.sort
      }
    default:
      return state
  }
}

export default bins
