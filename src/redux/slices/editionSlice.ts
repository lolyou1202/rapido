import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Edition } from '../../types/editionTypes'
import { generateRandomNums } from '../../hooks/generateRandomNums'
import {
	NUM_CELLS_FIRST_FIELD,
	NUM_CELLS_SECOND_FIELD,
	NUM_SELECTED_CELLS_FIRST_FIELD,
	NUM_SELECTED_CELLS_SECOND_FIELD,
} from '../../constants/settings'
import { TicketState } from '../../types/ticketTypes'

export interface InitialState {
	editionsList: Edition[]
}

const initialState: InitialState = {
	editionsList: [],
}

export const editionSlice = createSlice({
	name: 'edition',
	initialState,
	reducers: {
		createEdition: (
			state,
			{ payload }: PayloadAction<{ ticketsList: TicketState[] }>
		) => {
			const idEdition = generateRandomNums({
				min: 100000,
				max: 999999,
				numberRandom: 1,
				currentList: state.editionsList.map(
					edition => edition.idEdition
				),
			})
			const randomNumsListFirstField = generateRandomNums({
				min: 1,
				max: NUM_CELLS_FIRST_FIELD,
				numberRandom: NUM_SELECTED_CELLS_FIRST_FIELD,
			})
			const randomNumsListSecondField = generateRandomNums({
				min: 1,
				max: NUM_CELLS_SECOND_FIELD,
				numberRandom: NUM_SELECTED_CELLS_SECOND_FIELD,
			})
		},
	},
})

const { actions, reducer } = editionSlice
export const { createEdition } = actions
export default reducer

//to-do:
//создать отдельные файлы для функций генерации рандомных чисел для филдов и добавить везде где требуется