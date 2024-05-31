import './Controls.style.scss'
import {
	NUM_MAX_FILL_TICKETS,
	NUM_MIN_FILL_TICKETS,
} from '../../../constants/settings'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import {
	clearAllTickets,
	randomFillSeveralTickets,
} from '../../../redux/slices/gameSlice'
import { Layout } from '../../ui/Layout/Layout'
import { CounterRow } from '../../ui/Sidebar/CounterRow/CounterRow'
import { DescriptionRow } from '../../ui/Sidebar/DescriptionRow/DescriptionRow'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { Modifier } from '../../ui/Modifier/Modifier'

export const Controls = ({
	numCorrectTicket,
}: {
	numCorrectTicket: number
}) => {
	const [countToFill, setCountToFill] = useState(1)

	const dispatch = useAppDispatch()

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
		<Layout
			title='Панель управления'
			classNameLayoutRoot='controls'
			classNameLayoutContent='controls-content'
		>
			<Modifier />
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
		</Layout>
	)
}
