import { TicketState } from '../types/ticketTypes'

export const findIdUncorrectTickets = ({
	ticketsList,
}: {
	ticketsList: TicketState[]
}) => {
	return ticketsList.reduce((idArr: number[], ticket) => {
		if (!ticket.isCorrectTicket) {
			idArr.push(ticket.idTicket)
			return idArr
		} else {
			return idArr
		}
	}, [])
}
