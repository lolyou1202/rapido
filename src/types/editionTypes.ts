import { FieldVariant } from './ticketTypes'

export type EditionId = number
export type EditionDate = string
export type EditionTime = string
export type EditionParticipatingTickets = number
export type EditionCombination =
	| '8 | 1'
	| '8 | 0'
	| '7 | 1'
	| '7 | 0'
	| '6 | 1'
	| '6 | 0'
	| '5 | 1'
	| '5 | 0'
	| '4 | 1'
export type EditionWiningTickets = number
export type EditionWiningCombination = { [key in EditionCombination]: number }
export type EditionDroppedNums = { [key in FieldVariant]: number[] }

export type Edition = {
	idEdition: EditionId
	date: EditionDate
	participatingTickets: EditionParticipatingTickets
	numWiningTickets: EditionWiningTickets
	droppedNums: EditionDroppedNums
	winingCombinations: EditionWiningCombination
}

export type FrequentlyNumsDropSwich = 'lastFew' | 'wholeGame'