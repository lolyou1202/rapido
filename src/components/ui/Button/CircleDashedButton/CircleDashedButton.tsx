import './CircleDashedButton.style.scss'
import { CellVariant } from '../../../../types/ticket'
import classNames from 'classnames'
import { Coin } from '../../../icons/Coin'

export const CircleDashedButton = ({
	state = 'default',
	disabled = false,
	label,
	onClick,
}: {
	state?: CellVariant
	disabled?: boolean
	label?: string
	onClick?: () => void
}) => {
	const circleDashedButtonCN = classNames('circleDashedButton', state)
	return (
		<button
			className={circleDashedButtonCN}
			disabled={disabled}
			onClick={onClick}
		>
			<p className='circleDashedButton-label'>{label}</p>
			{state === 'coin' && <Coin className='circleDashedButton-coin' />}
		</button>
	)
}
