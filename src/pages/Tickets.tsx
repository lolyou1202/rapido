import { useAppSelector } from '../redux/hooks/useAppRedux'
import { Ticket } from '../components/ui/Ticket/Ticket'

export const Tickets = () => {
	const tickets = useAppSelector(state => state.ticket.tickets)

	return (
		<div>
			{tickets.map(ticket => (
				<Ticket key={ticket.id} ticketState={ticket} />
			))}
		</div>
	)
}
