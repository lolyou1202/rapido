import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { Ticket } from '../../components/ui/Ticket/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { Add } from '../../components/icons/Add'
import { findCorrectTickets } from '../../hooks/findCorrectTickets'
import {
	addTickets,
	clearAllTickets,
	createEdition,
	setGameStage,
} from '../../redux/slices/gameSlice'
import { SidebarFillTickets } from '../../components/ui/Sidebar/SidebarFillTickets/SidebarFillTickets'
import { SidebarViewResults } from '../../components/ui/Sidebar/SidebarViewResults/SidebarViewResults'

const { white } = colorTokens

export const Tickets = () => {
	const { ticketsList, gameStage } = useAppSelector(state => state.game)

	const lastEdition = useAppSelector(state => state.game.editionsList[0])

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
		<div className='tickets-layout'>
			<span>
				<div className='tickets-ticketList'>
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
				{gameStage === 'fillTickets' && (
					<SidebarFillTickets
						ticketsList={ticketsList}
						correctTicketIdList={correctTicketIdList}
						onClickIssueEditionButton={
							handleClickIssueEditionButton
						}
					/>
				)}
				{gameStage === 'viewResults' && (
					<SidebarViewResults
						lastEdition={lastEdition}
						onClickReplayButton={handleClickReplayButton}
					/>
				)}
			</span>
		</div>
	)
}
