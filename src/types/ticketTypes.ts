export type CellNum = number
export type CellVariant = 'default' | 'action' | 'coin'

export type FieldId = number
export type FieldVariant = 'large' | 'small'
export type FieldLabel = string
export type FieldNumSelectedCells = number
export type FieldCorrected = boolean
export type FieldLength = number
export type FieldCellsList = CellState[]

export type TicketId = number
export type TicketWin = boolean
export type TicketCorrect = boolean
export type TicketFieldsList = FieldState[]

export type CellState = {
	numCell: CellNum
	variantCell: CellVariant
}

export type FieldState = {
	idField: FieldId
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
	fieldsListTicket: TicketFieldsList
}
