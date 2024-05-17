import './Ticket.style.scss'
import classNames from 'classnames'
import {
	CellNum,
	FieldId,
	TicketId,
	TicketState,
} from '../../../types/ticketTypes'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import {
	clearTicket,
	deleteTicket,
	randomFillTicket,
	setVariantCell,
} from '../../../redux/slices/ticketSlice'
import { TicketField } from './TicketField/TicketField'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { Cross } from '../../icons/Cross'
import { Dice } from '../../icons/Dice'
import { Clear } from '../../icons/Clear'
import {
	NUM_SELECTED_CELLS_LARGE_FIELD,
	NUM_SELECTED_CELLS_SMALL_FIELD,
} from '../../../constants/settings'
import { colorTokens } from '../../../constants/colorTokens'
import { isSelectedCellsInField } from '../../../hooks/isSelectedCellsInField'

const { white } = colorTokens

export const Ticket = ({ ticketState }: { ticketState: TicketState }) => {
	const { idTicket, isCorrectTicket, isWinTicket, fieldsListTicket } =
		ticketState

	const dispatch = useAppDispatch()

	const handleClickCell = ({ idTicket }: { idTicket: TicketId }) => {
		return ({
			numCell,
			idField,
		}: {
			numCell: CellNum
			idField: FieldId
		}) => {
			dispatch(setVariantCell({ idTicket, numCell, idField }))
		}
	}
	const handleClickClearButton = () => {
		dispatch(clearTicket({ idTicket }))
	}
	const handleClickRandomButton = () => {
		dispatch(randomFillTicket({ idTicket }))
	}
	const handleClickDeleteButton = () => {
		dispatch(deleteTicket({ idTicket }))
	}
	const isSelectedCells = isSelectedCellsInField({
		fieldsListTicket,
	})
	const ticketCN = classNames('ticket', {
		action: isCorrectTicket,
		winner: isWinTicket,
	})

	return (
		<div className={ticketCN}>
			<span>
				<div className='ticket-head'>
					<p>Заполните билет</p>
					<span onClick={handleClickDeleteButton}>
						<Cross />
					</span>
				</div>
				<div className='ticket-main'>
					<p className='ticket-rule'>
						<span>
							Выберите {NUM_SELECTED_CELLS_LARGE_FIELD} чисел в
							первом поле
						</span>
						<span>
							и {NUM_SELECTED_CELLS_SMALL_FIELD} число во втором
							поле
						</span>
					</p>
					{fieldsListTicket.map(field => (
						<TicketField
							key={field.idField}
							{...field}
							onClickCell={handleClickCell({ idTicket })}
						/>
					))}
					<div className='ticket-buttons'>
						<DefaultButton
							action={false}
							label='Случайно'
							icon={<Dice color={white} />}
							onClick={handleClickRandomButton}
						/>
						<DefaultButton
							action={false}
							disabled={!isSelectedCells}
							label='Очистить'
							icon={<Clear color={white} />}
							onClick={handleClickClearButton}
						/>
					</div>
				</div>
			</span>
		</div>
	)
}
