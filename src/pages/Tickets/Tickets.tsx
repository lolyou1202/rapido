import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { Ticket } from '../../components/ui/Ticket/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { Add } from '../../components/icons/Add'
import { SidebarControls } from '../../components/features/SidebarControls/SidebarControls'
import { Edition } from '../../components/features/Edition/Edition'
import { findCorrectTickets } from '../../hooks/findCorrectTickets'
import {
	addTickets,
	clearAllTickets,
	createEdition,
	setGameStage,
} from '../../redux/slices/gameSlice'

const { white } = colorTokens

export const Tickets = () => {
	const { ticketsList, gameStage } = useAppSelector(state => state.game)

	const dispatch = useAppDispatch()

	const { correctTicketIdList } = findCorrectTickets({ ticketsList })

	const handleClickAddTicketsButton = () => {
		dispatch(addTickets({ countToAdd: 'default' }))
	}
	const handleClickIssueEditionButton = () => {
		dispatch(setGameStage({ gameStage: 'viewResults' }))
		dispatch(createEdition())
	}
	const handleClickReplayButton = () => {
		dispatch(setGameStage({ gameStage: 'fillTickets' }))
		dispatch(clearAllTickets())
	}

	return (
		<div className='game-layout'>
			<span>
				<div className='game-ticketList'>
					{ticketsList.map(ticket => (
						<Ticket
							key={ticket.idTicket}
							gameStage={gameStage}
							ticketState={ticket}
						/>
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
								disabled={correctTicketIdList.length < 1}
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
