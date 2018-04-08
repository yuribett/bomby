import { shuffleBins } from '../utils/utils'
import {DECREMENT_CONTDOWN, RESET_CONTDOWN, SHUFFLE_BINS, TIME_BIN_SHUFFLE} from '../utils/constants'

export const tick = () => ({ type: DECREMENT_CONTDOWN });
export const reset = () => ({ type: RESET_CONTDOWN });
export const shuffle = () => ({ type: SHUFFLE_BINS, sort: shuffleBins() });