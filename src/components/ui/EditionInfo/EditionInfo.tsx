import './EditionInfo.style.scss'
import { useState } from 'react'
import { Layout } from '../Layout/Layout'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { Edition } from '../../../types/editionTypes'
import { EditionInfoDroppedNums } from './EditionInfoDroppedNums'
import { EditionInfoWiningCobinations } from './EditionInfoWiningCobinations'

export const EditionInfo = ({ edition }: { edition: Edition }) => {
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
			classNameLayoutContent='editionInfo-content'
		>
			<DescriptionRow description='Дата тиража' count={date} />
			<span>
				{showField === 'droppedNums' && (
					<>
						<EditionInfoDroppedNums
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
						<EditionInfoWiningCobinations
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
