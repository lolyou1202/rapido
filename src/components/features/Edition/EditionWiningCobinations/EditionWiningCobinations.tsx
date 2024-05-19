import { SidebarDescriptionRow } from '../../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import { EditionField } from '../EditionField/EditionField'

export const EditionWiningCobinations = () => {
	return (
		<EditionField title='Выигранные комбинации'>
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
			<SidebarDescriptionRow description='8 + 1' count={2} />
		</EditionField>
	)
}
