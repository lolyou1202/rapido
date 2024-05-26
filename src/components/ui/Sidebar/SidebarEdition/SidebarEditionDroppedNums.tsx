import {
	EditionDroppedNums,
	EditionParticipatingTickets,
	EditionWiningTickets,
} from '../../../../types/editionTypes'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { TicketField } from '../../Ticket/TicketField/TicketField'
import { SidebarField } from '../SidebarField/SidebarField'

export const SidebarEditionDroppedNums = ({
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
		<SidebarField title='Выпавшие числа'>
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
			<DescriptionRow
				description='Участвующие билеты'
				count={participatingTickets}
			/>
			<DescriptionRow
				description='Победные билеты'
				count={numWiningTickets}
			/>
		</SidebarField>
	)
}
