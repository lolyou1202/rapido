import { EditionWiningCombination } from '../../../types/editionTypes'
import { SidebarField } from '../SidebarField/SidebarField'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'

export const EditionInfoWiningCobinations = ({
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
