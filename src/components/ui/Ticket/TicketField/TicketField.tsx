import './TicketField.style.scss'
import classNames from 'classnames'
import { FieldNum, FieldState } from '../../../../redux/slices/ticketSlice'
import { Check } from '../../../icons/Check'
import { Cross } from '../../../icons/Cross'
import { CircleDashedButton } from '../../Button/CircleDashedButton/CircleDashedButton'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export const TicketField = ({
	label,
	fieldState,
	fieldNum = 'large',
}: {
	label: string
	fieldState: FieldState
	fieldNum?: FieldNum
}) => {
	const { cells, isCorrect, numSelectedCells } = fieldState

	const checkCN = classNames('ticket__field-check', {
		show: isCorrect,
	})

	const crossCN = classNames('ticket__field-cross', {
		show:
			(fieldNum === 'large' && !isCorrect && isCorrect !== null) ||
			(fieldNum === 'small' && !isCorrect && isCorrect !== null),
	})

	return (
		<div className='ticket__field'>
			<div className='ticket__field-header'>
				<p className='ticket__field-name'>{label}</p>
				<div>
					<Check className={checkCN} />
					<Cross className={crossCN} />
				</div>
				{fieldNum === 'large' && numSelectedCells < 8 && (
					<ProgressBar progress={numSelectedCells} length={8} />
				)}
			</div>
			<div className='ticket__field-grid'>
				{cells.map(cell => (
					<CircleDashedButton
						key={cell.index}
						label={`${cell.index}`}
					/>
				))}
			</div>
		</div>
	)
}
