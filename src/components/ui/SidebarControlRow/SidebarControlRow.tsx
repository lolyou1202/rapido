import './SidebarControlRow.style.scss'
import { colorTokens } from '../../../constants/colorTokens'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { Minus } from '../../icons/Minus'
import { Plus } from '../../icons/Plus'

const { white } = colorTokens

export const SidebarControlRow = ({
	description,
	countToFill,
	minAdd,
	maxAdd,
	onClickMinus,
	onClickPlus,
}: {
	description: string
	countToFill: number
	minAdd: number
	maxAdd: number
	onClickMinus: () => void
	onClickPlus: () => void
}) => {
	return (
		<div className='sidebar-controlRow'>
			<p>{description}</p>
			<span>
				<DefaultButton
					action={false}
					disabled={countToFill === minAdd}
					icon={<Minus color={white} />}
					onClick={onClickMinus}
				/>
				<p>{countToFill}</p>
				<DefaultButton
					action={false}
					disabled={countToFill === maxAdd}
					icon={<Plus color={white} />}
					onClick={onClickPlus}
				/>
			</span>
		</div>
	)
}
