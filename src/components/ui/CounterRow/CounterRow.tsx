import './CounterRow.style.scss'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { Minus } from '../../icons/Minus'
import { Plus } from '../../icons/Plus'

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
					icon={<Minus  />}
					onClick={onClickMinus}
				/>
				<p>{countToFill}</p>
				<DefaultButton
					action={false}
					disabled={countToFill === maxAdd}
					icon={<Plus  />}
					onClick={onClickPlus}
				/>
			</span>
		</div>
	)
}
