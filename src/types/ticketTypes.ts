export type CellNum = number
export type CellVariant = 'default' | 'action' | 'coin'

export type FieldVariant = 'first' | 'second'
export type FieldLabel = string
export type FieldNumSelectedCells = number
export type FieldCorrected = boolean
export type FieldLength = number
export type FieldCellsList = CellState[]

export type TicketId = number
export type TicketWin = boolean
export type TicketCorrect = boolean
export type TicketFields = { [key in FieldVariant]: FieldState }

export type CellState = {
	numCell: CellNum
	variantCell: CellVariant
}

export type FieldState = {
	variantField: FieldVariant
	labelField: FieldLabel
	numSelectedCellsField: FieldNumSelectedCells
	isCorrectField: FieldCorrected
	cellsListField: FieldCellsList
}

export type TicketState = {
	idTicket: TicketId
	isWinTicket: TicketWin
	isCorrectTicket: TicketCorrect
	fieldsTicket: TicketFields
}

export type Modifire =
	| 'random'
	| 'evenNumbers'
	| 'oddNumbers'
	| 'upperHalf'
	| 'lowerHalf'
