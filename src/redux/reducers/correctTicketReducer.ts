import { TicketId } from '../../types/ticketTypes'
import { InitialState, ticketSlice } from '../slices/ticketSlice'

export const correctTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	ticketSlice.caseReducers.setCorrectTicket(state, {
		type: 'ticket/setCorrectedField',
		payload: { idTicket },
	})
}
