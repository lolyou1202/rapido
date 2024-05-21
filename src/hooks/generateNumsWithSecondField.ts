import {
	NUM_CELLS_SECOND_FIELD,
	NUM_SELECTED_CELLS_SECOND_FIELD,
} from '../constants/settings'
import { generateRandomNums } from './generateRandomNums'

export const generateNumsWithSecondField = () => {
	return generateRandomNums({
		min: 1,
		max: NUM_CELLS_SECOND_FIELD,
		numberRandom: NUM_SELECTED_CELLS_SECOND_FIELD,
	})
}
