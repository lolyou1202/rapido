import { EditionWiningCombination } from '../../../../types/editionTypes'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { SidebarField } from '../SidebarField/SidebarField'

export const SidebarEditionWiningCobinations = ({
	winingCombinations,
}: {
	winingCombinations: EditionWiningCombination
}) => {
	const entriesListWiningCombinations = Object.entries(winingCombinations)
	return (
		<SidebarField title='Выигранные комбинации'>
			{entriesListWiningCombinations.map(([combination, value]) => (
				<DescriptionRow
					key={combination}
					description={combination}
					count={value}
				/>
			))}
		</SidebarField>
	)
}
