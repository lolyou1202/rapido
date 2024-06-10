import { GameStage } from '../../../types/gameTypes'
import { Cross } from '../../icons/Cross'

export const TicketHeader = ({
	gameStage = 'fillTickets',
	isCorrectTicket,
	isWinTicket,
	onClickDelete,
}: {
	gameStage?: GameStage
	isCorrectTicket: boolean
	isWinTicket: boolean
	onClickDelete: () => void
}) => {
	return (
		<header className='ticket-head'>
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
			<button className='ticket-cross' onClick={onClickDelete}>
				<Cross />
			</button>
		</header>
	)
}
