import { TicketState } from '../types/ticketTypes'

export const getNumCorrectTickets = ({
	ticketsList,
}: {
	ticketsList: TicketState[]
}) => {
	return ticketsList.reduce((num, ticket) => {
		return ticket.isCorrectTicket ? num + 1 : num
	}, 0)
}
