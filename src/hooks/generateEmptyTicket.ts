import {
	NUM_CELLS_FIRST_FIELD,
	NUM_CELLS_SECOND_FIELD,
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
		fieldsTicket: {
			first: generateEmptyField({
				variantField: 'first',
				labelField: 'Поле 1',
				lengthField: NUM_CELLS_FIRST_FIELD,
			}),
			second: generateEmptyField({
				variantField: 'second',
				labelField: 'Поле 2',
				lengthField: NUM_CELLS_SECOND_FIELD,
			}),
		},
	}
}
