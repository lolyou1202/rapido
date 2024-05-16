import { createSlice } from '@reduxjs/toolkit'

export type CellVariant = 'default' | 'action' | 'coin'

export type FieldNum = 'large' | 'small'

export type FieldCell = {
	index: number
	variant: CellVariant
}

export type FieldState = {
	cells: FieldCell[]
	numSelectedCells: number
	isCorrect: boolean | null
}

export type TicketState = {
	id: number
	isWin: boolean | null
	isCorrect: boolean | null
	fieldsState: {
		first: FieldState
		second: FieldState
	}
}

export interface InitialState {
	tickets: TicketState[]
}

const initialState: InitialState = {
	tickets: [...Array(4)].map((_, index) => ({
		id: index,
		isWin: null,
		isCorrect: null,
		fieldsState: {
			first: {
				cells: [...Array(20)].map((_, index) => ({
					index: index + 1,
					variant: 'default',
				})),
				numSelectedCells: 0,
				isCorrect: null,
			},
			second: {
				cells: [...Array(4)].map((_, index) => ({
					index: index + 1,
					variant: 'default',
				})),
				numSelectedCells: 0,
				isCorrect: null,
			},
		},
	})),
}

const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {},
})

const { actions, reducer } = ticketSlice
export const {} = actions
export default reducer
