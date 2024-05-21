import {
	NUM_CELLS_FIRST_FIELD,
	NUM_SELECTED_CELLS_FIRST_FIELD,
} from '../constants/settings'
import { generateRandomNums } from './generateRandomNums'

export const generateNumsWithFirstField = () => {
	return generateRandomNums({
		min: 1,
		max: NUM_CELLS_FIRST_FIELD,
		numberRandom: NUM_SELECTED_CELLS_FIRST_FIELD,
	})
}
