import {
	NUM_ADD_TICKETS,
	NUM_CELLS_FIRST_FIELD,
	NUM_CELLS_SECOND_FIELD,
	NUM_SELECTED_CELLS_FIRST_FIELD,
	NUM_SELECTED_CELLS_SECOND_FIELD,
} from '../../constants/settings'
import { fillCellsList } from '../../hooks/fillCellsList'
import { generateEmptyTicket } from '../../hooks/generateEmptyTicket'
import { findIdUncorrectTickets } from '../../hooks/findIdUncorrectTickets'
import { generateRandomNums } from '../../hooks/generateRandomNums'
import {
	CellNum,
	FieldState,
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
import {
	Edition,
	EditionWiningCombination,
	EditionWiningTickets,
} from '../../types/editionTypes'
import { findCorrectTickets } from '../../hooks/findCorrectTickets'
import { findWinCombinationTicket } from '../../hooks/findWinCombinationTicket'
import { GameStage } from '../../types/gameTypes'
import { setWinTicketReducer } from '../reducers/setWinTicketReducer'
import { generateNumsWithFirstField } from '../../hooks/generateNumsWithFirstField'
import { generateNumsWithSecondField } from '../../hooks/generateNumsWithSecondField'
import { generateIdEdition } from '../../hooks/generateIdEdition'
import moment from 'moment'

export interface InitialState {
	ticketsList: TicketState[]
	editionsList: Edition[]
	gameRulesBlocks: {
		ticket: TicketState
		controls: {}
	}
	gameStage: GameStage
}

const initialState: InitialState = {
	ticketsList: generateDefaultTicketsIdList.map(id =>
		generateEmptyTicket({ idTicket: id })
	),
	editionsList: [],
	gameRulesBlocks: {
		ticket: generateEmptyTicket({ idTicket: 1111 }),
		controls: {},
	},
	gameStage: 'fillTickets',
}

export const gameSlice = createSlice({
	name: 'game',
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

			const ticketFieldsList = Object.values(ticket.fieldsTicket)

			ticketFieldsList.forEach(field => {
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
					case 'first':
						field.isCorrectField =
							selectedCells === NUM_SELECTED_CELLS_FIRST_FIELD
						break
					case 'second':
						field.isCorrectField =
							selectedCells === NUM_SELECTED_CELLS_SECOND_FIELD
				}
			})

			const isCorrectTicket = ticketFieldsList.reduce(
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
				variantField: FieldVariant
				numCell: CellNum
			}>
		) => {
			const { idTicket, variantField, numCell } = payload
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!

			const curentCell =
				ticket.fieldsTicket[variantField].cellsListField[numCell]

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

			const ticketFieldsList = Object.values(ticket.fieldsTicket)

			ticketFieldsList.forEach(field => {
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

			const ticketFieldsList = Object.values(ticket.fieldsTicket)

			ticketFieldsList.forEach(field => {
				switch (field.variantField) {
					case 'first':
						const randomNumsListLargeField = generateRandomNums({
							min: 1,
							max: NUM_CELLS_FIRST_FIELD,
							numberRandom: NUM_SELECTED_CELLS_FIRST_FIELD,
						})
						fillCellsList({
							cellsList: field.cellsListField,
							randomNumsList: randomNumsListLargeField,
						})
						break
					case 'second':
						const randomNumsListSmallField = generateRandomNums({
							min: 1,
							max: NUM_CELLS_SECOND_FIELD,
							numberRandom: NUM_SELECTED_CELLS_SECOND_FIELD,
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
		setWinTicket: (
			state,
			{
				payload,
			}: PayloadAction<{
				idTicket: TicketId
			}>
		) => {
			const { idTicket } = payload
			const ticket = state.ticketsList.find(
				ticket => ticket.idTicket === idTicket
			)!
			ticket.isWinTicket = true
		},
		createEdition: state => {
			const ticketsList = state.ticketsList
			const editionsList = state.editionsList

			const idEdition = generateIdEdition({ editionsList })

			const droppedNums = {
				first: generateNumsWithFirstField(),
				second: generateNumsWithSecondField(),
			}	
			const now = moment()
			const date = now.format('LL')
			const time = now.format('LTS')

			let winingCombinations: EditionWiningCombination = {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 0,
			}
			let numWiningTickets: EditionWiningTickets = 0

			const { correctTicketList } = findCorrectTickets({ ticketsList })

			correctTicketList.forEach(ticket => {
				Object.entries(ticket.fieldsTicket).forEach(([key, value]) => {
					const fieldVariant = key as FieldVariant
					const fieldValue = value as FieldState

					fieldValue.cellsListField.forEach(cell => {
						if (
							droppedNums[fieldVariant].includes(cell.numCell) &&
							cell.variantCell !== 'coin'
						) {
							cell.variantCell = 'action'
						}
					})
				})

				const { winCombination } = findWinCombinationTicket({
					ticket,
					droppedNums,
				})

				if (winCombination !== null) {
					setWinTicketReducer({
						state,
						idTicket: ticket.idTicket,
					})

					winingCombinations[winCombination] =
						winingCombinations[winCombination] + 1
					numWiningTickets = numWiningTickets + 1
				}
			})

			editionsList.unshift({
				idEdition,
				date,
				time,
				participatingTickets: correctTicketList.length,
				numWiningTickets,
				droppedNums,
				winingCombinations,
			})
		},
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
export const {
	setVariantCell,
	setCorrectTicket,
	clearTicket,
	randomFillTicket,
	deleteTicket,
	addTickets,
	clearAllTickets,
	randomFillSeveralTickets,
	setWinTicket,
	createEdition,
	setGameStage,
} = actions
export default reducer
