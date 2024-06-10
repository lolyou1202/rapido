import './Modifier.style.scss'
import { Random } from '../../icons/Random'
import { EvenNumbers } from '../../icons/EvenNumbers'
import { OddNumbers } from '../../icons/OddNumbers'
import { UpperHalf } from '../../icons/UpperHalf'
import { LowerHalf } from '../../icons/LowerHalf'
import { Modifire } from '../../../types/ticketTypes'
import classNames from 'classnames'

const modifierList: {
	name: Modifire
	icon: React.ReactNode
}[] = [
	{
		name: 'random',
		icon: <Random />,
	},
	{
		name: 'evenNumbers',
		icon: <EvenNumbers />,
	},
	{
		name: 'oddNumbers',
		icon: <OddNumbers />,
	},
	{
		name: 'upperHalf',
		icon: <UpperHalf />,
	},
	{
		name: 'lowerHalf',
		icon: <LowerHalf />,
	},
]

export const Modifier = ({
	curentModifier,
	onClickModifier,
}: {
	curentModifier: Modifire
	onClickModifier: (newModifier: Modifire) => void
}) => {
	return (
		<div className='modifire'>
			<p>Модификатор</p>
			<div>
				{modifierList.map(modifier => {
					const { name, icon } = modifier
					const modofierButtonCN = classNames('modifire-button', {
						active: curentModifier === name,
					})
					return (
						<button
							key={name}
							className={modofierButtonCN}
							onClick={() => onClickModifier(name)}
						>
							{icon}
						</button>
					)
				})}
			</div>
		</div>
	)
}
