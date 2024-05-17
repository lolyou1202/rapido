import { useAppSelector } from '../redux/hooks/useAppRedux'
import { Ticket } from '../components/ui/Ticket/Ticket'

export const Tickets = () => {
	const ticketsList = useAppSelector(state => state.ticket.ticketsList)

	return (
		<div>
			{ticketsList.map(ticket => (
				<Ticket key={ticket.idTicket} ticketState={ticket} />
			))}
		</div>
	)
}
