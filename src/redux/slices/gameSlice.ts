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
	Modifire,
	TicketId,
	TicketState,
} from '../../types/ticketTypes'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { correctTicketReducer } from '../reducers/correctTicketReducer'
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
import 'moment/dist/locale/ru'

export interface InitialState {
	ticketsList: TicketState[]
	modifier: Modifire
	editionsList: Edition[]
	gameRulesBlocks: {
		ticket: TicketState
	}
	gameStage: GameStage
}

const initialState: InitialState = {
	ticketsList: generateDefaultTicketsIdList.map(id =>
		generateEmptyTicket({ idTicket: id })
	),
	modifier: 'random',
	editionsList: [
		{
			idEdition: 339371,
			date: '24 мая 2024 г., 12:52',
			participatingTickets: 17,
			numWiningTickets: 2,
			droppedNums: {
				first: [19, 5, 8, 10, 20, 6, 17, 1],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 316778,
			date: '24 мая 2024 г., 03:22',
			participatingTickets: 1,
			numWiningTickets: 0,
			droppedNums: {
				first: [12, 5, 1, 2, 11, 6, 16, 20],
				second: [4],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 943160,
			date: '24 июня 2024 г., 13:52',
			participatingTickets: 8,
			numWiningTickets: 2,
			droppedNums: {
				first: [14, 6, 16, 4, 1, 18, 15, 8],
				second: [3],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 2,
				'5 | 0': 0,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 166100,
			date: '24 мая 2023 г., 22:12',
			participatingTickets: 11,
			numWiningTickets: 4,
			droppedNums: {
				first: [12, 18, 14, 10, 5, 2, 3, 8],
				second: [3],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 2,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 398240,
			date: '24 мая 2024 г., 23:51',
			participatingTickets: 33,
			numWiningTickets: 4,
			droppedNums: {
				first: [16, 9, 15, 20, 2, 14, 3, 8],
				second: [2],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 1,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 2,
			},
		},
		{
			idEdition: 112330,
			date: '24 мая 2024 г., 00:51',
			participatingTickets: 4,
			numWiningTickets: 1,
			droppedNums: {
				first: [19, 2, 12, 14, 8, 4, 6, 1],
				second: [3],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 905844,
			date: '24 мая 2024 г., 15:40',
			participatingTickets: 7,
			numWiningTickets: 2,
			droppedNums: {
				first: [10, 8, 1, 4, 18, 3, 5, 7],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 2,
			},
		},
		{
			idEdition: 562592,
			date: '24 мая 2024 г., 13:51',
			participatingTickets: 36,
			numWiningTickets: 4,
			droppedNums: {
				first: [20, 11, 6, 4, 19, 13, 5, 10],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 1,
				'5 | 0': 2,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 746267,
			date: '24 мая 2024 г., 13:50',
			participatingTickets: 27,
			numWiningTickets: 8,
			droppedNums: {
				first: [15, 8, 19, 14, 20, 17, 13, 16],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 2,
				'5 | 0': 4,
				'4 | 1': 2,
			},
		},
		{
			idEdition: 432980,
			date: '24 мая 2024 г., 13:50',
			participatingTickets: 5,
			numWiningTickets: 2,
			droppedNums: {
				first: [11, 16, 10, 4, 7, 18, 12, 20],
				second: [2],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 129219,
			date: '24 мая 2024 г., 13:50',
			participatingTickets: 11,
			numWiningTickets: 1,
			droppedNums: {
				first: [20, 18, 9, 13, 7, 11, 12, 15],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 640659,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 14,
			numWiningTickets: 2,
			droppedNums: {
				first: [13, 18, 5, 15, 17, 6, 3, 19],
				second: [3],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 1,
			},
		},
		{
			idEdition: 844715,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 10,
			numWiningTickets: 0,
			droppedNums: {
				first: [15, 16, 18, 6, 13, 11, 8, 5],
				second: [3],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 290911,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 5,
			numWiningTickets: 0,
			droppedNums: {
				first: [16, 2, 20, 4, 12, 18, 11, 13],
				second: [2],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 895197,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 17,
			numWiningTickets: 2,
			droppedNums: {
				first: [1, 19, 2, 6, 17, 14, 8, 18],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 2,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 666449,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 3,
			numWiningTickets: 1,
			droppedNums: {
				first: [11, 15, 12, 4, 20, 9, 8, 16],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 773104,
			date: '24 мая 2024 г., 13:49',
			participatingTickets: 11,
			numWiningTickets: 1,
			droppedNums: {
				first: [16, 13, 8, 2, 4, 19, 12, 10],
				second: [1],
			},
			winingCombinations: {
				'8 | 1': 0,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 0,
				'5 | 1': 0,
				'5 | 0': 1,
				'4 | 1': 0,
			},
		},
		{
			idEdition: 111111,
			date: '24 мая 2024 г., 13:47',
			participatingTickets: 10,
			numWiningTickets: 2,
			droppedNums: {
				first: [2, 3, 7, 12, 1, 20, 4, 17],
				second: [4],
			},
			winingCombinations: {
				'8 | 1': 1,
				'8 | 0': 0,
				'7 | 1': 0,
				'7 | 0': 0,
				'6 | 1': 0,
				'6 | 0': 1,
				'5 | 1': 0,
				'5 | 0': 0,
				'4 | 1': 0,
			},
		},
	],
	gameRulesBlocks: {
		ticket: generateEmptyTicket({ idTicket: 1111 }),
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
		setModifier: (
			state,
			{ payload }: PayloadAction<{ newModifier: Modifire }>
		) => {
			const { newModifier } = payload
			state.modifier = newModifier
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
			state.ticketsList = generateDefaultTicketsIdList.map(id =>
				generateEmptyTicket({ idTicket: id })
			)
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

			const [idEdition] = generateIdEdition({ editionsList })

			const droppedNums = {
				first: generateNumsWithFirstField(),
				second: generateNumsWithSecondField(),
			}
			const now = moment()
			const date = now.format('LLL')

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
	setModifier,
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
