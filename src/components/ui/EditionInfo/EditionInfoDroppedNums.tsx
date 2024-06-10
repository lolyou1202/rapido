import {
	EditionDroppedNums,
	EditionParticipatingTickets,
	EditionWiningTickets,
} from '../../../types/editionTypes'
import { DescriptionRow } from '../DescriptionRow/DescriptionRow'
import { TicketField } from '../TicketField/TicketField'
import { SidebarField } from '../SidebarField/SidebarField'

export const EditionInfoDroppedNums = ({
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
			<span className='editionInfo-fieldList'>
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
					labelField='Поле 2'
					cellsListField={numsSecondField.map(num => ({
						numCell: num,
						variantCell: 'coin',
					}))}
				/>
			</span>
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
