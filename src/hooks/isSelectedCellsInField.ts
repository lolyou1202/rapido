import { TicketFields } from '../types/ticketTypes'

export const isSelectedCellsInField = ({
	fieldsTicket,
}: {
	fieldsTicket: TicketFields
}) => {
	return Object.values(fieldsTicket).reduce((isSelected, field) => {
		return isSelected || field.numSelectedCellsField > 0
	}, false)
}
