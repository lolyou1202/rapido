import './SidebarEdition.style.scss'
import { useState } from 'react'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { SidebarContainer } from '../SidebarContainer/SidebarContainer'
import { Edition } from '../../../../types/editionTypes'
import { SidebarEditionDroppedNums } from './SidebarEditionDroppedNums'
import { SidebarEditionWiningCobinations } from './SidebarEditionWiningCobinations'
import { ArrowBoldLeft } from '../../../icons/ArrowBoldLeft'

export const SidebarEdition = ({ edition }: { edition: Edition | null }) => {
	if (!edition) {
		return (
			<SidebarContainer classNameContainerContent='sidebarEdition-empty'>
				<ArrowBoldLeft />
				<p>Выберите тираж</p>
			</SidebarContainer>
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
		<SidebarContainer
			title={`Тираж №${idEdition}`}
			classNameContainerContent='sidebarEdition-content'
		>
			<span>
				<DescriptionRow description='Дата тиража' count={date} />
			</span>
			<span>
				{showField === 'droppedNums' && (
					<>
						<SidebarEditionDroppedNums
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
						<SidebarEditionWiningCobinations
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
