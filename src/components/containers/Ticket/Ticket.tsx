import './Ticket.style.scss'
import classNames from 'classnames'
import {
	CellNum,
	FieldVariant,
	TicketId,
	TicketState,
} from '../../../types/ticketTypes'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../redux/hooks/useAppRedux'
import {
	clearTicket,
	deleteTicket,
	randomFillTicket,
	setVariantCell,
} from '../../../redux/slices/gameSlice'
import { isSelectedCellsInField } from '../../../hooks/isSelectedCellsInField'
import { TicketHeader } from './TicketHeader'
import { TicketHoles } from './TicketHoles'
import { TicketField } from '../../ui/TicketField/TicketField'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { Dice } from '../../icons/Dice'
import { Clear } from '../../icons/Clear'

export const Ticket = ({ ticketState }: { ticketState: TicketState }) => {
	const { gameStage } = useAppSelector(state => state.game)
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
		<article className={ticketCN}>
			<span>
				<TicketHeader
					gameStage={gameStage}
					isCorrectTicket={isCorrectTicket}
					isWinTicket={isWinTicket}
					onClickDelete={handleClickDeleteButton}
				/>
				<main className='ticket-main'>
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
					<TicketHoles />
				</main>
				<footer className='ticket-footer'>
					<DefaultButton
						action={false}
						disabled={gameStage === 'viewResults'}
						label='Заполнить'
						icon={<Dice />}
						onClick={handleClickRandomButton}
					/>
					<DefaultButton
						action={false}
						disabled={
							!isSelectedCells || gameStage === 'viewResults'
						}
						label='Очистить'
						icon={<Clear />}
						onClick={handleClickClearButton}
					/>
				</footer>
			</span>
		</article>
	)
}
