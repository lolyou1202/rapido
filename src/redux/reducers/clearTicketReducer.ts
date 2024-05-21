import { TicketId } from '../../types/ticketTypes'
import { InitialState, gameSlice } from '../slices/gameSlice'

export const clearTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	gameSlice.caseReducers.clearTicket(state, {
		type: 'game/clearTicket',
		payload: { idTicket: idTicket },
	})
}
