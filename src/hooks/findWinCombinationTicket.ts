import { NUM_SELECTED_CELLS_SECOND_FIELD } from '../constants/settings'
import { EditionCombination, EditionDroppedNums } from '../types/editionTypes'
import { TicketState } from '../types/ticketTypes'

export const findWinCombinationTicket = ({
	ticket,
	droppedNums,
}: {
	ticket: TicketState
	droppedNums: EditionDroppedNums
}) => {
	const { first: numsFirstField, second: numsSecondField } = droppedNums

	let winCombination: null | EditionCombination = null
	let matchCellsFirstField = 0
	let matchCellsSecondField = 0

	ticket.fieldsTicket.first.cellsListField.forEach(cell => {
		if (
			numsFirstField.includes(cell.numCell) &&
			cell.variantCell === 'coin'
		) {
			matchCellsFirstField = matchCellsFirstField + 1
		}
	})
	ticket.fieldsTicket.second.cellsListField.forEach(cell => {
		if (
			numsSecondField.includes(cell.numCell) &&
			cell.variantCell === 'coin'
		) {
			matchCellsSecondField = matchCellsSecondField + 1
		}
	})

	switch (matchCellsFirstField) {
		case 8:
			matchCellsSecondField === NUM_SELECTED_CELLS_SECOND_FIELD
				? (winCombination = `${matchCellsFirstField} + ${NUM_SELECTED_CELLS_SECOND_FIELD}`)
				: (winCombination = `${matchCellsFirstField}`)
			break
		case 7:
			matchCellsSecondField === NUM_SELECTED_CELLS_SECOND_FIELD
				? (winCombination = `${matchCellsFirstField} + ${NUM_SELECTED_CELLS_SECOND_FIELD}`)
				: (winCombination = `${matchCellsFirstField}`)
			break
		case 6:
			matchCellsSecondField === NUM_SELECTED_CELLS_SECOND_FIELD
				? (winCombination = `${matchCellsFirstField} + ${NUM_SELECTED_CELLS_SECOND_FIELD}`)
				: (winCombination = `${matchCellsFirstField}`)
			break
		case 5:
			matchCellsSecondField === NUM_SELECTED_CELLS_SECOND_FIELD
				? (winCombination = `${matchCellsFirstField} + ${NUM_SELECTED_CELLS_SECOND_FIELD}`)
				: (winCombination = `${matchCellsFirstField}`)
			break
		case 4:
			matchCellsSecondField === NUM_SELECTED_CELLS_SECOND_FIELD
				? (winCombination = `${matchCellsFirstField} + ${NUM_SELECTED_CELLS_SECOND_FIELD}`)
				: (winCombination = null)
			break
	}

	return {
		winCombination,
	}
}
