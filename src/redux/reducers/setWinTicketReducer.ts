import { TicketId } from '../../types/ticketTypes'
import { InitialState, gameSlice } from '../slices/gameSlice'

export const setWinTicketReducer = ({
	state,
	idTicket,
}: {
	state: InitialState
	idTicket: TicketId
}) => {
	gameSlice.caseReducers.setWinTicket(state, {
		type: 'game/setWinTicket',
		payload: { idTicket },
	})
}
