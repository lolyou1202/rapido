import './DefaultButton.style.scss'
import classNames from 'classnames'

export const DefaultButton = ({
	action,
	disabled,
	icon,
	label,
	className,
	onClick,
}: {
	action?: boolean
	disabled?: boolean
	icon?: React.ReactNode
	label?: string
	className?: string
	onClick?: () => void
}) => {
	const defaultButtonCN = classNames('defaultButton', className, {
		action: action,
	})
	return (
		<button
			className={defaultButtonCN}
			disabled={disabled}
			onClick={onClick}
		>
			{icon && <span className='defaultButton-icon'>{icon}</span>}
			{label && <p className='defaultButton-label'>{label}</p>}
		</button>
	)
}
