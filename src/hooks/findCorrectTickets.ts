import { TicketId, TicketState } from '../types/ticketTypes'

export const findCorrectTickets = ({
	ticketsList,
}: {
	ticketsList: TicketState[]
}) => {
	let correctTicketList: TicketState[] = []
	let correctTicketIdList: TicketId[] = []

	ticketsList.forEach(ticket => {
		if (ticket.isCorrectTicket) {
			correctTicketList.push(ticket)
			correctTicketIdList.push(ticket.idTicket)
		}
	})

	return {
		correctTicketList,
		correctTicketIdList,
	}
}
