import { InitialState, gameSlice } from '../slices/gameSlice'

export const addTicketsReducer = ({
	state,
	countToAdd,
}: {
	state: InitialState
	countToAdd: number
}) => {
	gameSlice.caseReducers.addTickets(state, {
		type: 'game/addTickets',
		payload: { countToAdd },
	})
}
