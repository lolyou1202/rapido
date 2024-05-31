import './SidebarEdition.style.scss'
import { useState } from 'react'
import { Layout } from '../../Layout/Layout'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { Edition } from '../../../../types/editionTypes'
import { SidebarEditionDroppedNums } from './SidebarEditionDroppedNums'
import { SidebarEditionWiningCobinations } from './SidebarEditionWiningCobinations'
import { ArrowBoldLeft } from '../../../icons/ArrowBoldLeft'

export const SidebarEdition = ({ edition }: { edition: Edition | null }) => {
	if (!edition) {
		return (
			<Layout classNameLayoutContent='sidebarEdition-empty'>
				<ArrowBoldLeft />
				<p>Выберите тираж</p>
			</Layout>
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
		<Layout
			title={`Тираж №${idEdition}`}
			classNameLayoutContent='sidebarEdition-content'
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
		</Layout>
	)
}
