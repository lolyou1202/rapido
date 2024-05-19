import './Edition.style.scss'
import { useState } from 'react'
import { SidebarContainer } from '../../ui/SidebarContainer/SidebarContainer'
import { DefaultButton } from '../../ui/Button/DefaultButton/DefaultButton'
import { EditionDroppedNums } from './EditionDroppedNums/EditionDroppedNums'
import { EditionWiningCobinations } from './EditionWiningCobinations/EditionWiningCobinations'

export const Edition = () => {
	const [showField, setShowField] = useState<
		'droppedNums' | 'winingCobinations'
	>('droppedNums')

	return (
		<SidebarContainer
			title='Тираж №423531'
			classNameContainerRoot='sidebar-edition'
			classNameContainerContent='edition-content'
		>
			{showField === 'droppedNums' && (
				<>
					<EditionDroppedNums />
					<DefaultButton
						action={false}
						label='Выигранные комбинации'
						onClick={() => setShowField('winingCobinations')}
					/>
				</>
			)}
			{showField === 'winingCobinations' && (
				<>
					<EditionWiningCobinations />
					<DefaultButton
						action={false}
						label='Выпавшие числа'
						onClick={() => setShowField('droppedNums')}
					/>
				</>
			)}
		</SidebarContainer>
	)
}
