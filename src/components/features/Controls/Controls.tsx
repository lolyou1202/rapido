import './Controls.style.scss'
import { useState } from 'react'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { SidebarControlRow } from '../../ui/SidebarControlRow/SidebarControlRow'
import { SidebarDescriptionRow } from '../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import { TicketState } from '../../../types/ticketTypes'
import { getNumCorrectTickets } from '../../../hooks/numCorrectTickets'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import {
	clearAllTickets,
	randomFillSeveralTickets,
} from '../../../redux/slices/gameSlice'
import {
	NUM_MAX_FILL_TICKETS,
	NUM_MIN_FILL_TICKETS,
} from '../../../constants/settings'
import { ContainerBox } from '../../ui/Container/ContainerBox/ContainerBox'

export const Controls = ({
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
		setCountToFill(1)
	}

	return (
		<ContainerBox classNameContainerContent='controls-content'>
			<SidebarControlRow
				description='Случайно заполнить'
				countToFill={countToFill}
				minAdd={NUM_MIN_FILL_TICKETS}
				maxAdd={NUM_MAX_FILL_TICKETS}
				onClickMinus={handleClickMinus}
				onClickPlus={handleClickPlus}
			/>
			<SidebarDescriptionRow
				description='Заполненных билетов'
				count={numCorrectTicket}
			/>
			<div className='controls-buttons'>
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
		</ContainerBox>
	)
}
