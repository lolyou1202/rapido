import './EditionBlock.style.scss'
import { useState } from 'react'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { SidebarDescriptionRow } from '../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import { ContainerBox } from '../../ui/Container/ContainerBox/ContainerBox'
import { Edition } from '../../../types/editionTypes'
import { EditionDroppedNumsBlock } from './EditionDroppedNumsBlock'
import { EditionWiningCobinationsBlock } from './EditionWiningCobinationsBlock'

export const EditionBlock = ({ edition }: { edition: Edition }) => {
	const {
		idEdition,
		date,
		time,
		numWiningTickets,
		participatingTickets,
		winingCombinations,
		droppedNums,
	} = edition

	const [showField, setShowField] = useState<
		'droppedNums' | 'winingCobinations'
	>('droppedNums')

	return (
		<ContainerBox
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
		</ContainerBox>
	)
}
