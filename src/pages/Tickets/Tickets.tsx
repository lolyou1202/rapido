import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { Ticket } from '../../components/ui/Ticket/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { Add } from '../../components/icons/Add'
import { addTickets } from '../../redux/slices/ticketSlice'
import { SidebarControls } from '../../components/features/SidebarControls/SidebarControls'
import { Edition } from '../../components/features/Edition/Edition'
import { setGameStage } from '../../redux/slices/game'

const { white } = colorTokens

export const Tickets = () => {
	const ticketsList = useAppSelector(state => state.ticket.ticketsList)
	const gameStage = useAppSelector(state => state.game.gameStage)

	const dispatch = useAppDispatch()

	const handleClickAddTicketsButton = () => {
		dispatch(addTickets({ countToAdd: 'default' }))
	}
	const handleClickIssueEditionButton = () => {
		dispatch(setGameStage({ gameStage: 'viewResults' }))
	}
	const handleClickReplayButton = () => {
		dispatch(setGameStage({ gameStage: 'fillTickets' }))
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
					{gameStage === 'fillTickets' && (
						<>
							<SidebarControls ticketsList={ticketsList} />
							<DefaultButton
								action
								label='Выпустить тираж'
								onClick={handleClickIssueEditionButton}
							/>
						</>
					)}
					{gameStage === 'viewResults' && (
						<>
							<Edition />
							<DefaultButton
								action
								label='Играть заново'
								onClick={handleClickReplayButton}
							/>
						</>
					)}
				</div>
			</span>
		</div>
	)
}
