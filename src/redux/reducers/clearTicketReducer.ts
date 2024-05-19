import { TicketId } from '../../types/ticketTypes'
import { InitialState, ticketSlice } from '../slices/ticketSlice'

export const clearTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	ticketSlice.caseReducers.clearTicket(state, {
		type: 'ticket/clearTicket',
		payload: { idTicket: idTicket },
	})
}
