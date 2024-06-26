import { TicketId } from '../../types/ticketTypes'
import { InitialState, gameSlice } from '../slices/gameSlice'

export const randomFillTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	gameSlice.caseReducers.randomFillTicket(state, {
		type: 'game/randomFillTicket',
		payload: { idTicket: idTicket },
	})
}
