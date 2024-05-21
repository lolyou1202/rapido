import { TicketId } from '../../types/ticketTypes'
import { InitialState, gameSlice } from '../slices/gameSlice'

export const correctTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	gameSlice.caseReducers.setCorrectTicket(state, {
		type: 'game/setCorrectedField',
		payload: { idTicket },
	})
}
