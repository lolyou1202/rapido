import { useEffect, useState } from 'react'
import { TicketFieldsList } from '../types/ticketTypes'

export const isSelectedCellsInField = ({
	fieldsListTicket,
}: {
	fieldsListTicket: TicketFieldsList
}) => {
	const [isSelectedCells, setSelectedCells] = useState(false)

	useEffect(() => {
		setSelectedCells(
			fieldsListTicket.reduce((isSelected, field) => {
				return isSelected || field.numSelectedCellsField > 0
			}, false)
		)
	}, [fieldsListTicket])

	return isSelectedCells
}
