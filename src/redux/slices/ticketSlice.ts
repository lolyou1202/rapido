import {
	NUM_CELLS_LARGE_FIELD,
	NUM_CELLS_SMALL_FIELD,
	NUM_DEFAULT_TICKET_IN_LIST,
	NUM_SELECTED_CELLS_LARGE_FIELD,
	NUM_SELECTED_CELLS_SMALL_FIELD,
} from '../../constants/settings'
import {
	CellNum,
	FieldId,
	FieldLabel,
	FieldLength,
	FieldState,
	FieldVariant,
	TicketId,
	TicketState,
} from '../../types/ticketTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialState {
	ticketsList: TicketState[]
}

const getEmptyField = ({
	idField,
	variantField,
	labelField,
	lengthField,
}: {
	idField: FieldId
	variantField: FieldVariant
	labelField: FieldLabel
	lengthField: FieldLength
}): FieldState => {
	return {
		variantField,
		idField,
		labelField,
		numSelectedCellsField: 0,
		isCorrectField: false,
		cellsListField: [...Array(lengthField)].map((_, index) => ({
			numCell: index + 1,
			variantCell: 'default',
		})),
	}
}

const getEmptyTicket = ({ idTicket }: { idTicket: number }): TicketState => {
	return {
		idTicket,
		isWinTicket: false,
		isCorrectTicket: false,
		fieldsListTicket: [
			getEmptyField({
				idField: 0,
				variantField: 'large',
				labelField: 'Поле 1',
				lengthField: NUM_CELLS_LARGE_FIELD,
			}),
			getEmptyField({
				idField: 1,
				variantField: 'small',
				labelField: 'Поле 2',
				lengthField: NUM_CELLS_SMALL_FIELD,
			}),
		],
	}
}

const initialState: InitialState = {
	ticketsList: [...Array(NUM_DEFAULT_TICKET_IN_LIST)].map((_, index) =>
		getEmptyTicket({ idTicket: index })
	),
}

const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setVariantCell: (
			state,
			{
				payload,
			}: PayloadAction<{
				idTicket: TicketId
				idField: FieldId
				numCell: CellNum
			}>
		) => {
			const { idTicket, idField, numCell } = payload

			const indexTicket = state.ticketsList.findIndex(
				index => index.idTicket === idTicket
			)

			const variantCell =
				state.ticketsList[indexTicket].fieldsListTicket[idField]
					.cellsListField[numCell].variantCell

			switch (variantCell) {
				case 'default':
					state.ticketsList[indexTicket].fieldsListTicket[
						idField
					].cellsListField[numCell].variantCell = 'coin'
					break
				case 'coin':
					state.ticketsList[indexTicket].fieldsListTicket[
						idField
					].cellsListField[numCell].variantCell = 'default'
					break
			}

			ticketSlice.caseReducers.setCorrectedField(state, {
				type: 'setCorrectedField',
				payload: { idTicket },
			})
		},
		setCorrectedField: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList[idTicket]

			for (const field of ticket.fieldsListTicket) {
				const selectedCells = field.cellsListField.reduce(
					(selectedCells, curentCell) => {
						if (curentCell.variantCell === 'coin') {
							return selectedCells + 1
						} else {
							return selectedCells
						}
					},
					0
				)
				field.numSelectedCellsField = selectedCells

				switch (field.variantField) {
					case 'large':
						field.isCorrectField =
							selectedCells === NUM_SELECTED_CELLS_LARGE_FIELD
						break
					case 'small':
						field.isCorrectField =
							selectedCells === NUM_SELECTED_CELLS_SMALL_FIELD
				}
			}
			ticket.isCorrectTicket = ticket.fieldsListTicket.reduce(
				(isCorrectField, field) => {
					return field.isCorrectField && isCorrectField
				},
				true
			)
		},
		setClearTicket: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList[idTicket]

			for (const field of ticket.fieldsListTicket) {
				field.cellsListField.map(cell => (cell.variantCell = 'default'))
				field.isCorrectField = false
				field.numSelectedCellsField = 0
			}

			ticket.isCorrectTicket = false
			ticket.isWinTicket = false
		},
	},
})

const { actions, reducer } = ticketSlice
export const { setVariantCell, setCorrectedField, setClearTicket } = actions
export default reducer
