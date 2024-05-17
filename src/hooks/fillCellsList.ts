import { CellState } from "../types/ticketTypes"

export const fillCellsList = ({
	cellsList,
	randomNumsList,
}: {
	cellsList: CellState[]
	randomNumsList: number[]
}) => {
	cellsList.forEach(cell => {
		if (randomNumsList.includes(cell.numCell)) {
			cell.variantCell = 'coin'
		} else {
			cell.variantCell = 'default'
		}
	})
}
