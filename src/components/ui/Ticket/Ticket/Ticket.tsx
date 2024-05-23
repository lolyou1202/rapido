import './Ticket.style.scss'
import classNames from 'classnames'
import {
	CellNum,
	FieldVariant,
	TicketId,
	TicketState,
} from '../../../../types/ticketTypes'
import { useAppDispatch } from '../../../../redux/hooks/useAppRedux'
import {
	clearTicket,
	deleteTicket,
	randomFillTicket,
	setVariantCell,
} from '../../../../redux/slices/gameSlice'
import { TicketField } from '../TicketField/TicketField'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { Cross } from '../../../icons/Cross'
import { Dice } from '../../../icons/Dice'
import { Clear } from '../../../icons/Clear'
import { colorTokens } from '../../../../constants/colorTokens'
import { isSelectedCellsInField } from '../../../../hooks/isSelectedCellsInField'
import { GameStage } from '../../../../types/gameTypes'

const { white } = colorTokens

export const Ticket = ({
	gameStage,
	ticketState,
}: {
	gameStage?: GameStage
	ticketState: TicketState
}) => {
	const { idTicket, isCorrectTicket, isWinTicket, fieldsTicket } = ticketState

	const dispatch = useAppDispatch()

	const handleClickCell = ({ idTicket }: { idTicket: TicketId }) => {
		return ({
			numCell,
			variantField,
		}: {
			numCell: CellNum
			variantField: FieldVariant
		}) => {
			dispatch(setVariantCell({ idTicket, numCell, variantField }))
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
		fieldsTicket,
	})
	const ticketCN = classNames('ticket', {
		action: isCorrectTicket,
		disabled: gameStage === 'viewResults',
		winner: isWinTicket,
	})

	return (
		<div className={ticketCN}>
			<span>
				<div className='ticket-head'>
					<p className='ticket-title'>
						{!isCorrectTicket && 'Заполните билет'}
						{gameStage === 'fillTickets' &&
							isCorrectTicket &&
							'Билет заполнен'}
						{gameStage === 'viewResults' &&
							isCorrectTicket &&
							isWinTicket &&
							'Победный билет'}
						{gameStage === 'viewResults' &&
							isCorrectTicket &&
							!isWinTicket &&
							'Неудачный билет'}
					</p>
					<button
						className='ticket-cross'
						onClick={handleClickDeleteButton}
					>
						<Cross />
					</button>
				</div>
				<div className='ticket-main'>
					{Object.values(fieldsTicket).map(field => (
						<TicketField
							{...field}
							key={field.variantField}
							onClickCell={
								gameStage === 'fillTickets'
									? handleClickCell({ idTicket })
									: undefined
							}
						/>
					))}
					<div className='ticket__holes'>
						<span className='ticket__holes-leftTop'></span>
						<span className='ticket__holes-rightTop'></span>
						<span className='ticket__holes-rightBottom'></span>
						<span className='ticket__holes-leftBottom'></span>
					</div>
				</div>
				<div className='ticket-footer'>
					<DefaultButton
						action={false}
						disabled={gameStage === 'viewResults'}
						label='Случайно'
						icon={<Dice color={white} />}
						onClick={handleClickRandomButton}
					/>
					<DefaultButton
						action={false}
						disabled={
							!isSelectedCells || gameStage === 'viewResults'
						}
						label='Очистить'
						icon={<Clear color={white} />}
						onClick={handleClickClearButton}
					/>
				</div>
			</span>
		</div>
	)
}
