import './CircleDashedButton.style.scss'
import classNames from 'classnames'
import { CellVariant } from '../../../../types/ticketTypes'
import { Coin } from '../../../icons/Coin'

export const CircleDashedButton = ({
	variant = 'default',
	disabled = false,
	label,
	onClick,
}: {
	variant?: CellVariant
	disabled?: boolean
	label?: string
	onClick?: () => void
}) => {
	const circleDashedButtonCN = classNames('circleDashedButton', variant)
	return (
		<button
			className={circleDashedButtonCN}
			disabled={disabled}
			onClick={onClick}
		>
			<p className='circleDashedButton-label'>{label}</p>
			{variant === 'coin' && <Coin className='circleDashedButton-coin' />}
		</button>
	)
}
