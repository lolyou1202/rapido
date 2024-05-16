import './Ticket.style.scss'
import classNames from 'classnames'
import { TicketState } from '../../../redux/slices/ticketSlice'
import { Cross } from '../../icons/Cross'
import { Dice } from '../../icons/Dice'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { Clear } from '../../icons/Clear'
import { TicketField } from './TicketField/TicketField'

export const Ticket = ({ ticketState }: { ticketState: TicketState }) => {
	const { isWin, isCorrect, fieldsState } = ticketState

	const ticketCN = classNames('ticket', {
		action: isCorrect,
		winner: isWin,
	})

	return (
		<div className={ticketCN}>
			<span>
				<div className='ticket-head'>
					<p>Заполните билет</p>
					<span>
						<Cross />
					</span>
				</div>
				<div className='ticket-main'>
					<p className='ticket-rule'>
						<span>Выберите 8 чисел в первом поле</span>
						<span>и 1 число во втором поле</span>
					</p>
					<TicketField
						label='Поле 1'
						fieldNum='large'
						fieldState={fieldsState.first}
					/>
					<TicketField
						label='Поле 2'
						fieldNum='small'
						fieldState={fieldsState.second}
					/>
					<div className='ticket-buttons'>
						<DefaultButton
							action={false}
							icon={<Dice color='var(--white)' />}
							label='Случайно'
						/>
						<DefaultButton
							action={false}
							disabled
							icon={<Clear color='var(--white)' />}
							label='Очистить'
						/>
					</div>
				</div>
			</span>
		</div>
	)
}
