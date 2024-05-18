import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { Ticket } from '../../components/ui/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { Add } from '../../components/icons/Add'
import { addTickets } from '../../redux/slices/ticketSlice'
import { SidebarControls } from '../../components/features/SidebarControls/SidebarControls'

const { white } = colorTokens

export const Tickets = () => {
	const ticketsList = useAppSelector(state => state.ticket.ticketsList)

	const dispatch = useAppDispatch()

	const handleClickAddTicketsButton = () => {
		dispatch(addTickets({ countToAdd: 'default' }))
	}

	return (
		<div className='game-layout'>
			<span>
				<div className='game-ticketList'>
					{ticketsList.map(ticket => (
						<Ticket key={ticket.idTicket} ticketState={ticket} />
					))}
				</div>
				<DefaultButton
					action={false}
					label='Добавить билеты'
					icon={<Add color={white} />}
					onClick={handleClickAddTicketsButton}
				/>
			</span>
			<span>
				<div className='game-sidebar'>
					<SidebarControls ticketsList={ticketsList} />
					<DefaultButton
						action
						label='Выпустить тираж'
						onClick={() => {}}
					/>
				</div>
			</span>
		</div>
	)
}
