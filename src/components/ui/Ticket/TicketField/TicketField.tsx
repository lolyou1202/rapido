import './TicketField.style.scss'
import classNames from 'classnames'
import {
	CellNum,
	FieldCellsList,
	FieldCorrected,
	FieldLabel,
	FieldNumSelectedCells,
	FieldVariant,
} from '../../../../types/ticketTypes'
import { Check } from '../../../icons/Check'
import { Cross } from '../../../icons/Cross'
import { CircleDashedButton } from '../../Button/CircleDashedButton/CircleDashedButton'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { NUM_SELECTED_CELLS_FIRST_FIELD } from '../../../../constants/settings'

export const TicketField = ({
	variantField,
	labelField,
	numSelectedCellsField,
	isCorrectField,
	cellsListField,
	onClickCell,
}: {
	variantField: FieldVariant
	labelField: FieldLabel
	numSelectedCellsField?: FieldNumSelectedCells
	isCorrectField?: FieldCorrected
	cellsListField: FieldCellsList
	onClickCell?: ({
		numCell,
		variantField,
	}: {
		numCell: CellNum
		variantField: FieldVariant
	}) => void
}) => {
	const checkCN = classNames('ticket__field-check', {
		show: isCorrectField,
	})

	const crossCN = classNames(
		'ticket__field-cross',
		numSelectedCellsField && {
			show:
				(variantField === 'first' &&
					!isCorrectField &&
					numSelectedCellsField > NUM_SELECTED_CELLS_FIRST_FIELD) ||
				(variantField === 'second' &&
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
					? variantField === 'first' &&
					  numSelectedCellsField <
							NUM_SELECTED_CELLS_FIRST_FIELD && (
							<ProgressBar
								progress={numSelectedCellsField}
								length={NUM_SELECTED_CELLS_FIRST_FIELD}
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
							onClickCell
								? () =>
										onClickCell({
											numCell: cell.numCell - 1,
											variantField,
										})
								: undefined
						}
					/>
				))}
			</div>
		</div>
	)
}
