import { Cross } from '../../icons/Cross'
import './Ticket.style.scss'

export const Ticket = ({}: {}) => {
	return (
		<div className='ticket'>
			<span>
				<div className='ticket-head'>
					<p>Заполните билет</p>
					<Cross />
				</div>
				<div className='ticket-main'>
					<p className='ticket-rule'>
						<span>Выберите 8 чисел в первом поле</span>
						<span>и 1 число во втором поле</span>
					</p>
				</div>
			</span>
		</div>
	)
}
