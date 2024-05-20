import {
	NUM_ADD_TICKETS,
	NUM_CELLS_LARGE_FIELD,
	NUM_CELLS_SMALL_FIELD,
	NUM_SELECTED_CELLS_LARGE_FIELD,
	NUM_SELECTED_CELLS_SMALL_FIELD,
} from '../../constants/settings'
import { fillCellsList } from '../../hooks/fillCellsList'
import { generateEmptyTicket } from '../../hooks/generateEmptyTicket'
import { findIdUncorrectTickets } from '../../hooks/findIdUncorrectTickets'
import { generateRandomNums } from '../../hooks/generateRandomNums'
import {
	CellNum,
	FieldId,
	FieldVariant,
	TicketId,
	TicketState,
} from '../../types/ticketTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { correctTicketReducer } from '../reducers/correctTicketReducer'
import { clearTicketReducer } from '../reducers/clearTicketReducer'
import { addTicketsReducer } from '../reducers/addTicketsReducer'
import { randomFillTicketReducer } from '../reducers/randomFillTicketReducer'
import { generateDefaultTicketsIdList } from '../../hooks/generateDefaultTicketsIdList'

export interface InitialState {
	ticketsList: TicketState[]
	droppedNums: {
		variantField: FieldVariant
		cellsListField: number[]
	}[]
}

const initialState: InitialState = {
	ticketsList: generateDefaultTicketsIdList.map(id => {
		return generateEmptyTicket({ idTicket: id })
	}),
	droppedNums: [],
}

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setCorrectTicket: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!

			ticket.fieldsListTicket.forEach(field => {
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
			})

			const isCorrectTicket = ticket.fieldsListTicket.reduce(
				(isCorrectField, field) => {
					return field.isCorrectField && isCorrectField
				},
				true
			)

			ticket.isCorrectTicket = isCorrectTicket
		},
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
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!

			const curentCell =
				ticket.fieldsListTicket[idField].cellsListField[numCell]

			switch (curentCell.variantCell) {
				case 'default':
					curentCell.variantCell = 'coin'
					break
				case 'coin':
					curentCell.variantCell = 'default'
					break
			}

			correctTicketReducer({ state, idTicket })
		},
		clearTicket: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!

			ticket.fieldsListTicket.forEach(field => {
				field.cellsListField.map(cell => (cell.variantCell = 'default'))
				field.isCorrectField = false
				field.numSelectedCellsField = 0
			})

			ticket.isCorrectTicket = false
			ticket.isWinTicket = false
		},
		randomFillTicket: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!

			ticket.fieldsListTicket.forEach(field => {
				switch (field.variantField) {
					case 'large':
						const randomNumsListLargeField = generateRandomNums({
							min: 1,
							max: NUM_CELLS_LARGE_FIELD,
							numberRandom: NUM_SELECTED_CELLS_LARGE_FIELD,
							currentList: state.ticketsList.map(
								ticket => ticket.idTicket
							),
						})
						fillCellsList({
							cellsList: field.cellsListField,
							randomNumsList: randomNumsListLargeField,
						})
						break
					case 'small':
						const randomNumsListSmallField = generateRandomNums({
							min: 1,
							max: NUM_CELLS_SMALL_FIELD,
							numberRandom: NUM_SELECTED_CELLS_SMALL_FIELD,
							currentList: state.ticketsList.map(
								ticket => ticket.idTicket
							),
						})
						fillCellsList({
							cellsList: field.cellsListField,
							randomNumsList: randomNumsListSmallField,
						})
						break
				}
			})

			correctTicketReducer({ state, idTicket })
		},
		deleteTicket: (
			state,
			{ payload }: PayloadAction<{ idTicket: TicketId }>
		) => {
			const { idTicket } = payload

			const filteredTicketList = state.ticketsList.filter(
				ticket => ticket.idTicket !== idTicket
			)
			state.ticketsList = filteredTicketList
		},
		addTickets: (
			state,
			{ payload }: PayloadAction<{ countToAdd: number | 'default' }>
		) => {
			const { countToAdd } = payload

			const randomTicketsIdList = generateRandomNums({
				min: 1000,
				max: 9999,
				numberRandom:
					countToAdd === 'default'
						? state.ticketsList.length % 2 === 1
							? 1
							: NUM_ADD_TICKETS
						: countToAdd,
				currentList: state.ticketsList.map(ticket => ticket.idTicket),
			})

			const newEmptyTikets = randomTicketsIdList.map(id => {
				return generateEmptyTicket({ idTicket: id })
			})

			state.ticketsList.push(...newEmptyTikets)
		},
		clearAllTickets: state => {
			state.ticketsList.forEach(ticket => {
				clearTicketReducer({
					state,
					idTicket: ticket.idTicket,
				})
			})
		},
		randomFillSeveralTickets: (
			state,
			{ payload }: PayloadAction<{ countToFill: number }>
		) => {
			const { countToFill } = payload

			let idList = findIdUncorrectTickets({
				ticketsList: state.ticketsList,
			})

			if (idList.length < countToFill) {
				addTicketsReducer({
					state,
					countToAdd: countToFill - idList.length,
				})
				idList = findIdUncorrectTickets({
					ticketsList: state.ticketsList,
				})
			} else {
				idList.splice(countToFill)
			}

			state.ticketsList.forEach(ticket => {
				if (idList.includes(ticket.idTicket)) {
					randomFillTicketReducer({
						state,
						idTicket: ticket.idTicket,
					})
				}
			})
		},
	},
})

const { actions, reducer } = ticketSlice
export const {
	setVariantCell,
	setCorrectTicket,
	clearTicket,
	randomFillTicket,
	deleteTicket,
	addTickets,
	clearAllTickets,
	randomFillSeveralTickets,
} = actions
export default reducer
