import {
	FieldLabel,
	FieldLength,
	FieldState,
	FieldVariant,
} from '../types/ticketTypes'

export const generateEmptyField = ({
	variantField,
	labelField,
	lengthField,
}: {
	variantField: FieldVariant
	labelField: FieldLabel
	lengthField: FieldLength
}): FieldState => {
	return {
		variantField,
		labelField,
		numSelectedCellsField: 0,
		isCorrectField: false,
		cellsListField: [...Array(lengthField)].map((_, index) => ({
			numCell: index + 1,
			variantCell: 'default',
		})),
	}
}
