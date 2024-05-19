import { TicketId } from '../../types/ticketTypes'
import { InitialState, ticketSlice } from '../slices/ticketSlice'

export const randomFillTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	ticketSlice.caseReducers.randomFillTicket(state, {
		type: 'ticket/randomFillTicket',
		payload: { idTicket: idTicket },
	})
}
