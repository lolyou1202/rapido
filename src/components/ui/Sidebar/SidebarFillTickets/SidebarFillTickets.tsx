import { SidebarControls } from '../SidebarControls/SidebarControls'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'

export const SidebarFillTickets = ({
	numCorrectTicket,
	correctTicketIdList,
	onClickIssueEditionButton,
}: {
	numCorrectTicket: number
	correctTicketIdList: number[]
	onClickIssueEditionButton: () => void
}) => {
	return (
		<>
			<SidebarControls numCorrectTicket={numCorrectTicket} />
			<DefaultButton
				action
				disabled={correctTicketIdList.length < 1}
				label='Выпустить тираж'
				onClick={onClickIssueEditionButton}
			/>
		</>
	)
}
