import { EditionField } from '../EditionField/EditionField'
import { TicketField } from '../../../ui/Ticket/TicketField/TicketField'
import { SidebarDescriptionRow } from '../../../ui/SidebarDescriptionRow/SidebarDescriptionRow'

export const EditionDroppedNums = () => {
	return (
		<EditionField title='Выпавшие числа'>
			<TicketField
				variantField='large'
				labelField='Поле 1'
				cellsListField={[...Array(8)].map((_, index) => ({
					numCell: index + 1,
					variantCell: 'coin',
				}))}
			/>
			<TicketField
				variantField='small'
				labelField='Поле 1'
				cellsListField={[...Array(1)].map((_, index) => ({
					numCell: index + 1,
					variantCell: 'coin',
				}))}
			/>
			<SidebarDescriptionRow description='Участвующие билеты' count={2} />
			<SidebarDescriptionRow description='Победные билеты' count={1} />
		</EditionField>
	)
}
