import './EditionBlock.style.scss'
import { useState } from 'react'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { SidebarDescriptionRow } from '../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import { ContainerBox } from '../../ui/Container/ContainerBox/ContainerBox'
import { Edition } from '../../../types/editionTypes'
import { EditionDroppedNumsBlock } from './EditionDroppedNumsBlock'
import { EditionWiningCobinationsBlock } from './EditionWiningCobinationsBlock'
import { ArrowBoldLeft } from '../../icons/ArrowBoldLeft'

export const EditionBlock = ({ edition }: { edition: Edition | null }) => {
	if (!edition) {
		return (
			<ContainerBox classNameContainerContent='edition-empty'>
				<ArrowBoldLeft />
				<p>Выберите тираж</p>
			</ContainerBox>
		)
	}

	const {
		idEdition,
		date,
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
			classNameContainerContent='edition-content'
		>
			<span>
				<SidebarDescriptionRow description='Дата тиража' count={date} />
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
