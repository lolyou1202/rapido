import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { useState } from 'react'
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
import { Controls } from '../../components/features/Controls/Controls'
import { getNumCorrectTickets } from '../../hooks/numCorrectTickets'
import { EditionInfo } from '../../components/ui/EditionInfo/EditionInfo'
import { BottomBar } from '../../components/ui/BottomBar/BottomBar'
import { MobileDrawer } from '../../components/ui/MobileDrawer/MobileDrawer'
import { Sidebar } from '../../components/ui/Sidebar/Sidebar'

const { white } = colorTokens

export const Tickets = () => {
	const { ticketsList, gameStage } = useAppSelector(state => state.game)

	const lastEdition = useAppSelector(state => state.game.editionsList[0])

	const [isOpenDrawer, setOpenDrawer] = useState(false)

	const dispatch = useAppDispatch()

	const { correctTicketIdList } = findCorrectTickets({ ticketsList })

	const numCorrectTicket = getNumCorrectTickets({ ticketsList })

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
	const toggleDrawer = () => {
		setOpenDrawer(prevState => !prevState)
	}

	return (
		<>
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
					<Sidebar>
						{gameStage === 'fillTickets' && (
							<>
								<Controls numCorrectTicket={numCorrectTicket} />
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
								<EditionInfo edition={lastEdition} />
								<DefaultButton
									action
									label='Играть заново'
									onClick={handleClickReplayButton}
								/>
							</>
						)}
					</Sidebar>
				</span>
			</div>
			<BottomBar>
				{gameStage === 'fillTickets' && (
					<>
						<DefaultButton
							label='Панель управления'
							onClick={toggleDrawer}
						/>
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
						<DefaultButton
							label={`Тираж №${lastEdition.idEdition}`}
							onClick={toggleDrawer}
						/>
						<DefaultButton
							action
							disabled={correctTicketIdList.length < 1}
							label='Играть заново'
							onClick={handleClickReplayButton}
						/>
					</>
				)}
			</BottomBar>
			<MobileDrawer
				anchor='bottom'
				open={isOpenDrawer}
				onClose={toggleDrawer}
			>
				{gameStage === 'fillTickets' && (
					<Controls numCorrectTicket={numCorrectTicket} />
				)}
				{gameStage === 'viewResults' && (
					<EditionInfo edition={lastEdition} />
				)}
			</MobileDrawer>
		</>
	)
}
