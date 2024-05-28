import { Edition } from '../../../../types/editionTypes'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { SidebarEdition } from '../SidebarEdition/SidebarEdition'

export const SidebarViewResults = ({
	lastEdition,
	onClickReplayButton,
}: {
	lastEdition: Edition
	onClickReplayButton: () => void
}) => {
	return (
		<>
			<SidebarEdition edition={lastEdition} />
			<DefaultButton
				action
				label='Играть заново'
				onClick={onClickReplayButton}
			/>
		</>
	)
}
