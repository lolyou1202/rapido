import './Edition.style.scss'
import { useState } from 'react'
import { SidebarContainer } from '../../ui/SidebarContainer/SidebarContainer'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { useAppSelector } from '../../../redux/hooks/useAppRedux'
import { EditionDroppedNumsBlock } from './EditionBlock/EditionDroppedNumsBlock'
import { EditionWiningCobinationsBlock } from './EditionBlock/EditionWiningCobinationsBlock'
import { SidebarDescriptionRow } from '../../ui/SidebarDescriptionRow/SidebarDescriptionRow'

export const Edition = () => {
	const lastEdition = useAppSelector(state => state.game.editionsList[0])

	const {
		idEdition,
		date,
		time,
		numWiningTickets,
		participatingTickets,
		winingCombinations,
		droppedNums,
	} = lastEdition

	const [showField, setShowField] = useState<
		'droppedNums' | 'winingCobinations'
	>('droppedNums')

	return (
		<SidebarContainer
			title={`Тираж №${idEdition}`}
			classNameContainerRoot='sidebar-edition'
			classNameContainerContent='edition-content'
		>
			<span>
				<SidebarDescriptionRow description='Дата тиража' count={date} />
				<SidebarDescriptionRow
					description='Время публикации'
					count={time}
				/>
			</span>
			<span>
				{showField === 'droppedNums' && (
					<>
						<EditionDroppedNumsBlock
							numWiningTickets={numWiningTickets}
							participatingTickets={participatingTickets}
							droppedNums={droppedNums}
						/>
						<DefaultButton
							label='Выигранные комбинации'
							onClick={() => setShowField('winingCobinations')}
						/>
					</>
				)}
				{showField === 'winingCobinations' && (
					<>
						<EditionWiningCobinationsBlock
							winingCombinations={winingCombinations}
						/>
						<DefaultButton
							label='Выпавшие числа'
							onClick={() => setShowField('droppedNums')}
						/>
					</>
				)}
			</span>
		</SidebarContainer>
	)
}
