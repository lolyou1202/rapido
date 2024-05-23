import { EditionWiningCombination } from '../../../types/editionTypes'
import { SidebarDescriptionRow } from '../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import { EditionField } from './EditionField/EditionField'

export const EditionWiningCobinationsBlock = ({
	winingCombinations,
}: {
	winingCombinations: EditionWiningCombination
}) => {
	const entriesListWiningCombinations = Object.entries(winingCombinations)
	return (
		<EditionField title='Выигранные комбинации'>
			{entriesListWiningCombinations.map(([combination, value]) => (
				<SidebarDescriptionRow
					key={combination}
					description={combination}
					count={value}
				/>
			))}
		</EditionField>
	)
}
