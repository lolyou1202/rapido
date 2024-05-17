import {
	FieldId,
	FieldLabel,
	FieldLength,
	FieldState,
	FieldVariant,
} from '../types/ticketTypes'

export const getEmptyField = ({
	idField,
	variantField,
	labelField,
	lengthField,
}: {
	idField: FieldId
	variantField: FieldVariant
	labelField: FieldLabel
	lengthField: FieldLength
}): FieldState => {
	return {
		variantField,
		idField,
		labelField,
		numSelectedCellsField: 0,
		isCorrectField: false,
		cellsListField: [...Array(lengthField)].map((_, index) => ({
			numCell: index + 1,
			variantCell: 'default',
		})),
	}
}
