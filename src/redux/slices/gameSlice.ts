import { GameStage } from '../../types/gameTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialState {
	gameStage: GameStage
}

const initialState: InitialState = {
	gameStage: 'fillTickets',
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameStage: (
			state,
			{ payload }: PayloadAction<{ gameStage: GameStage }>
		) => {
			const { gameStage } = payload
			state.gameStage = gameStage
		},
	},
})

const { actions, reducer } = gameSlice
export const { setGameStage } = actions
export default reducer
