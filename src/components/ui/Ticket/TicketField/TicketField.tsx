import './TicketField.style.scss'
import classNames from 'classnames'
import {
	CellNum,
	FieldCellsList,
	FieldCorrected,
	FieldId,
	FieldLabel,
	FieldNumSelectedCells,
	FieldVariant,
} from '../../../../types/ticketTypes'
import { Check } from '../../../icons/Check'
import { Cross } from '../../../icons/Cross'
import { CircleDashedButton } from '../../Button/CircleDashedButton/CircleDashedButton'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { NUM_SELECTED_CELLS_LARGE_FIELD } from '../../../../constants/settings'

export const TicketField = ({
	idField,
	variantField,
	labelField,
	numSelectedCellsField,
	isCorrectField,
	cellsListField,
	onClickCell,
}: {
	idField?: FieldId
	variantField: FieldVariant
	labelField: FieldLabel
	numSelectedCellsField?: FieldNumSelectedCells
	isCorrectField?: FieldCorrected
	cellsListField: FieldCellsList
	onClickCell?: ({
		numCell,
		idField,
	}: {
		numCell: CellNum
		idField: FieldId
	}) => void
}) => {
	const checkCN = classNames('ticket__field-check', {
		show: isCorrectField,
	})

	const crossCN = classNames(
		'ticket__field-cross',
		numSelectedCellsField && {
			show:
				(variantField === 'large' &&
					!isCorrectField &&
					numSelectedCellsField > NUM_SELECTED_CELLS_LARGE_FIELD) ||
				(variantField === 'small' &&
					!isCorrectField &&
					numSelectedCellsField !== 0),
		}
	)

	return (
		<div className='ticket__field'>
			<div className='ticket__field-header'>
				<p className='ticket__field-name'>{labelField}</p>
				<div>
					<Check className={checkCN} />
					<Cross className={crossCN} />
				</div>
				{numSelectedCellsField !== undefined
					? variantField === 'large' &&
					  numSelectedCellsField <
							NUM_SELECTED_CELLS_LARGE_FIELD && (
							<ProgressBar
								progress={numSelectedCellsField}
								length={NUM_SELECTED_CELLS_LARGE_FIELD}
							/>
					  )
					: undefined}
			</div>
			<div className='ticket__field-grid'>
				{cellsListField.map(cell => (
					<CircleDashedButton
						key={cell.numCell}
						label={`${cell.numCell}`}
						variant={cell.variantCell}
						onClick={
							onClickCell && idField !== undefined
								? () =>
										onClickCell({
											numCell: cell.numCell - 1,
											idField,
										})
								: undefined
						}
					/>
				))}
			</div>
		</div>
	)
}
