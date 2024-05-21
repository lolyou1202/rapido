import { EditionField } from '../EditionField/EditionField'
import { TicketField } from '../../../ui/Ticket/TicketField/TicketField'
import { SidebarDescriptionRow } from '../../../ui/SidebarDescriptionRow/SidebarDescriptionRow'
import {
	EditionDroppedNums,
	EditionParticipatingTickets,
	EditionWiningTickets,
} from '../../../../types/editionTypes'

export const EditionDroppedNumsBlock = ({
	droppedNums,
	numWiningTickets,
	participatingTickets,
}: {
	droppedNums: EditionDroppedNums
	numWiningTickets: EditionWiningTickets
	participatingTickets: EditionParticipatingTickets
}) => {
	const { first: numsFirstField, second: numsSecondField } = droppedNums
	return (
		<EditionField title='Выпавшие числа'>
			<TicketField
				variantField='first'
				labelField='Поле 1'
				cellsListField={numsFirstField.map(num => ({
					numCell: num,
					variantCell: 'coin',
				}))}
			/>
			<TicketField
				variantField='second'
				labelField='Поле 1'
				cellsListField={numsSecondField.map(num => ({
					numCell: num,
					variantCell: 'coin',
				}))}
			/>
			<SidebarDescriptionRow
				description='Участвующие билеты'
				count={participatingTickets}
			/>
			<SidebarDescriptionRow
				description='Победные билеты'
				count={numWiningTickets}
			/>
		</EditionField>
	)
}
