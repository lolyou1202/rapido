import './Controls.style.scss'
import {
	NUM_MAX_FILL_TICKETS,
	NUM_MIN_FILL_TICKETS,
} from '../../../constants/settings'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks/useAppRedux'
import { Modifire } from '../../../types/ticketTypes'
import {
	clearAllTickets,
	randomFillSeveralTickets,
	setModifier,
} from '../../../redux/slices/gameSlice'
import { Layout } from '../../ui/Layout/Layout'
import { Modifier } from '../../ui/Modifier/Modifier'
import { DescriptionRow } from '../../ui/DescriptionRow/DescriptionRow'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { CounterRow } from '../../ui/CounterRow/CounterRow'

export const Controls = ({
	numCorrectTicket,
	curentModifier,
}: {
	numCorrectTicket: number
	curentModifier: Modifire
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
	const handleClickModifier = (newModifier: Modifire) => {
		dispatch(setModifier({ newModifier }))
	}

	return (
		<Layout
			title='Панель управления'
			classNameLayoutRoot='controls'
			classNameLayoutContent='controls-content'
		>
			<Modifier
				curentModifier={curentModifier}
				onClickModifier={handleClickModifier}
			/>
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
			<span className='controls-buttons'>
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
			</span>
		</Layout>
	)
}
