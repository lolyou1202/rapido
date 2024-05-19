import { InitialState, ticketSlice } from '../slices/ticketSlice'

export const addTicketsReducer = ({
	state,
	countToAdd,
}: {
	state: InitialState
	countToAdd: number
}) => {
	ticketSlice.caseReducers.addTickets(state, {
		type: 'ticket/addTickets',
		payload: { countToAdd },
	})
}
