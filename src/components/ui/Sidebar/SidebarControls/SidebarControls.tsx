import './SidebarControls.style.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/hooks/useAppRedux'
import { getNumCorrectTickets } from '../../../../hooks/numCorrectTickets'
import { TicketState } from '../../../../types/ticketTypes'
import { SidebarContainer } from '../SidebarContainer/SidebarContainer'
import { CounterRow } from '../CounterRow/CounterRow'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import {
	clearAllTickets,
	randomFillSeveralTickets,
} from '../../../../redux/slices/gameSlice'
import {
	NUM_MAX_FILL_TICKETS,
	NUM_MIN_FILL_TICKETS,
} from '../../../../constants/settings'
import { SidebarModifier } from '../SidebarModifier/SidebarModifier'


export const SidebarControls = ({
	ticketsList,
}: {
	ticketsList: TicketState[]
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
		<SidebarContainer
			title='Панель управления'
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
	)
}
