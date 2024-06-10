import { TicketFields } from '../types/ticketTypes'

export const isSelectedCellsInField = ({
	fieldsTicket,
}: {
	fieldsTicket: TicketFields
}) => {
	return Object.values(fieldsTicket).some(
		field => field.numSelectedCellsField > 0
	)
}
