import { FieldVariant } from './ticketTypes'

export type EditionId = number
export type EditionDate = string
export type EditionTime = string
export type EditionParticipatingTickets = number
export type EditionWiningTickets = number
export type EditionWiningCombination = {
	combination: EditionCombination
	count: number
}
export type EditionDroppedNums = { [key in FieldVariant]: number[] }

export type EditionCombination =
	| '8 + 1'
	| '8'
	| '7 + 1'
	| '7'
	| '6 + 1'
	| '6'
	| '5 + 1'
	| '5'
	| '4 + 1'

export type Edition = {
	idEdition: EditionId
	date: EditionDate
	time: EditionTime
	participatingTickets: EditionParticipatingTickets
	winingTickets: EditionWiningTickets
	winingCombinations: EditionWiningCombination[]
	droppedNums: EditionDroppedNums
}
