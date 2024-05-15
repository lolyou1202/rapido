import './Ticket.style.scss'
import { TicketDivider } from './TicketDivider'

export const Ticket = ({}: {}) => {
	return (
		<div className='ticket action'>
			<span>
				<div className='ticket-head'></div>
				{/*<TicketDivider color='var(--shadow)' />*/}
				<div className='ticket-main'></div>
			</span>
		</div>
	)
}
