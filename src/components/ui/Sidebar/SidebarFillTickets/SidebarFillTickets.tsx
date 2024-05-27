import './SidebarFillTickets.style.scss'
import { useState } from 'react'
import { TicketState } from '../../../../types/ticketTypes'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { useAppDispatch } from '../../../../redux/hooks/useAppRedux'
import { getNumCorrectTickets } from '../../../../hooks/numCorrectTickets'
import {
	clearAllTickets,
	randomFillSeveralTickets,
} from '../../../../redux/slices/gameSlice'
import { SidebarContainer } from '../SidebarContainer/SidebarContainer'
import { SidebarModifier } from '../SidebarModifier/SidebarModifier'
import { CounterRow } from '../CounterRow/CounterRow'
import {
	NUM_MAX_FILL_TICKETS,
	NUM_MIN_FILL_TICKETS,
} from '../../../../constants/settings'

export const SidebarFillTickets = ({
	ticketsList,
	correctTicketIdList,
	onClickIssueEditionButton,
}: {
	ticketsList: TicketState[]
	correctTicketIdList: number[]
	onClickIssueEditionButton: () => void
}) => {
	const [countToFill, setCountToFill] = useState(1)

	const dispatch = useAppDispatch()

	const numCorrectTicket = getNumCorrectTickets({ ticketsList })

	const handleClickPlus = () => {
		setCountToFill(prevState => prevState + 1)
	}
	const handleClickMinus = () => {
		setCountToFill(prevState => prevState - 1)
	}
	const handleClickClearAllTicketsButton = () => {
		dispatch(clearAllTickets())
	}
	const handleClickFillTicketsButton = () => {
		dispatch(randomFillSeveralTickets({ countToFill }))
	}

	return (
		<div className='sidebarTicketsGrid'>
			<SidebarContainer
				title='Панель управления'
				classNameContainerRoot='sidebarTicketsGrid-left'
				classNameContainerContent='sidebarControls-content'
			>
				<SidebarModifier />
				<CounterRow
					description='Случайно заполнить'
					countToFill={countToFill}
					minAdd={NUM_MIN_FILL_TICKETS}
					maxAdd={NUM_MAX_FILL_TICKETS}
					onClickMinus={handleClickMinus}
					onClickPlus={handleClickPlus}
				/>
				<DescriptionRow
					description='Заполненных билетов'
					count={numCorrectTicket}
				/>
				<div className='sidebarControls-buttons'>
					<DefaultButton
						action={false}
						label='Заполнить'
						onClick={handleClickFillTicketsButton}
					/>
					<DefaultButton
						action={false}
						disabled={numCorrectTicket === 0}
						label='Очистить все'
						onClick={handleClickClearAllTicketsButton}
					/>
				</div>
			</SidebarContainer>
			<span className='sidebarTicketsGrid-right'>
				<SidebarContainer classNameContainerContent='sidebarControls-content'>
					<DescriptionRow
						description='Заполненных билетов'
						count={numCorrectTicket}
					/>
					<DefaultButton
						action={false}
						disabled={numCorrectTicket === 0}
						label='Очистить все'
						onClick={handleClickClearAllTicketsButton}
					/>
				</SidebarContainer>
				<DefaultButton
					action
					disabled={correctTicketIdList.length < 1}
					label='Выпустить тираж'
					onClick={onClickIssueEditionButton}
				/>
			</span>
		</div>
	)
}
