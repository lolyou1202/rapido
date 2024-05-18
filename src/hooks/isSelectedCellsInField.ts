import { TicketFieldsList } from '../types/ticketTypes'

export const isSelectedCellsInField = ({
	fieldsListTicket,
}: {
	fieldsListTicket: TicketFieldsList
}) => {
	return fieldsListTicket.reduce((isSelected, field) => {
		return isSelected || field.numSelectedCellsField > 0
	}, false)
}
