import {
	NUM_CELLS_LARGE_FIELD,
	NUM_CELLS_SMALL_FIELD,
} from '../constants/settings'
import { TicketState } from '../types/ticketTypes'
import { generateEmptyField } from './generateEmptyField'

export const generateEmptyTicket = ({
	idTicket,
}: {
	idTicket: number
}): TicketState => {
	return {
		idTicket,
		isWinTicket: false,
		isCorrectTicket: false,
		fieldsListTicket: [
			generateEmptyField({
				idField: 0,
				variantField: 'large',
				labelField: 'Поле 1',
				lengthField: NUM_CELLS_LARGE_FIELD,
			}),
			generateEmptyField({
				idField: 1,
				variantField: 'small',
				labelField: 'Поле 2',
				lengthField: NUM_CELLS_SMALL_FIELD,
			}),
		],
	}
}
