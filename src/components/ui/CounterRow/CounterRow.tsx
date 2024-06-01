import { colorTokens } from '../../../constants/colorTokens'
import { Minus } from '../../icons/Minus'
import { Plus } from '../../icons/Plus'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import './CounterRow.style.scss'


const { white } = colorTokens

export const CounterRow = ({
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
		<div className='counterRow'>
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
