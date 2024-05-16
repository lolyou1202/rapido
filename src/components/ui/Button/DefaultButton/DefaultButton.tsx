import './DefaultButton.style.scss'
import classNames from 'classnames'

export const DefaultButton = ({
	action,
	disabled,
	icon,
	label,
	onClick,
}: {
	action?: boolean
	disabled?: boolean
	icon?: React.ReactNode
	label?: string
	onClick?: () => void
}) => {
	const defaultButtonCN = classNames('defaultButton', { action: action })
	return (
		<button
			className={defaultButtonCN}
			disabled={disabled}
			onClick={onClick}
		>
			<span className='defaultButton-icon'>{icon}</span>
			<p className='defaultButton-label'>{label}</p>
		</button>
	)
}
